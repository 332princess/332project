const { Op, QueryTypes } = require('sequelize');
const { Like, User, Song, sequelize } = require('../models/index');

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      const query = `insert into likes(user_id, song_id) select ${params.userId}, id from songs where video_id = '${params.videoId}'`;
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
        name: { [Op.like]: `%${params.name}%` }, // like검색
      };
    }
    if (params.userId) {
      setQuery.where = {
        ...setQuery.where,
        userId: params.userId, // like검색
      };
    }
    setQuery.order = [['id', 'DESC']];
    return new Promise((resolve, reject) => {
      Like.findAndCountAll({
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
      const userLike = Like.findAll({
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
      return userLike
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
      // Like.findAll
      Like.update(params, {
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
      // Like.findAll
      Like.destroy({
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
  selectLike(params) {
    return new Promise((resolve, reject) => {
      Like.findOne({
        attributes: ['id', 'likeId', 'password', 'name', 'role'],
        where: { likeid: params.likeid },
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
