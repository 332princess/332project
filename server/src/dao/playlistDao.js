const { Op } = require('sequelize');
const { PlayList, User, Song } = require('../models/index');

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      PlayList.create(params)
        .then((inserted) => {
          const insertedResult = { ...inserted };
          delete insertedResult.dataValues.password;
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
        userId: params.userId, // like 검색
      };
    }
    setQuery.order = [['id', 'DESC']];
    return new Promise((resolve, reject) => {
      PlayList.findAndCountAll({
        ...setQuery,
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
        include: [
            // {
            //   model: User,
            //   as: 'User',
            //   attributes: ['user_id'],
            // },
          {
            model: Song,
            as: 'Song',
            attributes: ['videoId'],
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
      PlayList.findAll({
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
        where:{
          userId : params.id,
        }
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
