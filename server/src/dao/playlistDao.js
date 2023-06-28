const { Op, QueryTypes } = require('sequelize');
const { PlayList, User, Song, sequelize } = require('../models/index');

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      const query = `insert into play_lists(user_id, song_id) select ${params.userId}, id from songs where video_id = '${params.videoId}'`;
      sequelize
        .query(query, { type: QueryTypes.INSERT })
        .then((inserted) => {
          resolve(inserted);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  selectList(params) {
    // where 검색 조건
    const setQuery = {};
    if (params.name) {
      setQuery.where = {
        ...setQuery.where,
        name: { [Op.like]: `%${params.name}%` }, // like 검색
      };
    }
    if (params.userId) {
      setQuery.where = {
        ...setQuery.where,
        user_id: params.userId, // like 검색
      };
    }
    setQuery.order = [['id', 'DESC']];
    return new Promise((resolve, reject) => {
      PlayList.findAndCountAll({
        ...setQuery,
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
        include: [
          {
            model: User,
            as: 'User',
          },
          {
            model: Song,
            as: 'Song',
          },
        ],
      })
        .then((selectedList) => {
          resolve(selectedList);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      const userPlaylist = PlayList.findAll({
        where: {
          user_id: params.user_id,
        },
        include: [
          {
            model: Song,
            as: 'Song',
          },
        ],
      });
      return userPlaylist
        .then((selectedInfo) => {
          resolve(selectedInfo);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  update(params) {
    return new Promise((resolve, reject) => {
      // PlayList.findAll
      PlayList.update(params, {
        where: { id: params.id },
      })
        .then(([updated]) => {
          resolve({ updatedCount: updated });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  delete(params) {
    return new Promise((resolve, reject) => {
      // PlayList.findAll
      PlayList.destroy({
        where: {
          id: params.id,
        },
      })
        .then((deleted) => {
          resolve({ deletedCount: deleted });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  selectPlayList(params) {
    return new Promise((resolve, reject) => {
      PlayList.findOne({
        attributes: ['id', 'playlistId', 'password', 'name', 'role'],
        where: { playlistid: params.playlistid },
      })
        .then((selectedOne) => {
          resolve(selectedOne);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = dao;
