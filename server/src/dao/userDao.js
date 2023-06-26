const { Op } = require('sequelize');
const { User} = require('../models/index');

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      User.create(params)
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
    // where 검색 조건s
    const setQuery = {};
    console.log(params.user_id);
    if (params.user_id) {
      setQuery.where = {
        ...setQuery.where,
        user_id: { [Op.like]: `%${params.user_id}%` }, // like검색
      };
    }
    if (params.user_id) {
      setQuery.where = {
        ...setQuery.where,
        user_id: params.user_id, // like검색
      };
    }
    setQuery.order = [['user_id', 'ASC']];
    return new Promise((resolve, reject) => {
      User.findAndCountAll({
        ...setQuery,
        attributes: { exclude: ['password'] },

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
    return User.findOne({ where: { user_id: params.user_id } })
      .then((selectedInfo) => {
        return selectedInfo;
      })
      .catch((err) => {
        throw err;
      });
  },

  deleteUser(params) {
    return new Promise((resolve, reject) => {
      User.destroy({ where: { user_id: params.user_id } })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

};

module.exports = dao;
