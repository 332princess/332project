const { Op } = require('sequelize');
const { Song, User } = require('../models/index');

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      Song.create({
        videoId : params.videoId,

      }).then((inserted) => {
          resolve(inserted);
        }).catch((err) => {
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
        name: { [Op.song]: `%${params.name}%` }, // song검색
      };
    }
    if (params.userId) {
      setQuery.where = {
        ...setQuery.where,
        userId: params.userId, // song검색
      };
    }
    setQuery.order = [['id', 'DESC']];
    return new Promise((resolve, reject) => {
      Song.findAndCountAll({
        ...setQuery,
        attributes: { exclude: ['password'] },
        include: [
          {
            model: User,
            as: 'User',
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
      // User.findAll
      Song.findByPk(params.id, {
        include: [
          {
            model: User,
            as: 'User',
          },
        ],
      })
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
      // Song.findAll
      Song.update(params, {
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
      // Song.findAll
      Song.destroy({
        where: { id: params.id },
      })
        .then((deleted) => {
          resolve({ deletedCount: deleted });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  selectSong(params) {
    return new Promise((resolve, reject) => {
      Song.findOne({
        attributes: ['id', 'songId', 'password', 'name', 'role'],
        where: { songid: params.songid },
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
