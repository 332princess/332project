const { Op } = require('sequelize');
const { Login } = require('../models/index');

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      Login.create(params).then((inserted) => {
        resolve(inserted);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // 라스트 조회
  selectList(params) {
    const setQuery = {};
    if (params.name) {
      setQuery.where = {
        ...setQuery.where,
        name: { [Op.like]: `%${params.name}%` },
      };
    }
    setQuery.order = [['id', 'DESC']];
    return new Promise((resolve, reject) => {
      Login.findAndCountAll({
        ...setQuery,
      }).then((selectedList) => {
        resolve(selectedList);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      Login.findByPk(
        params.id,
      ).then((selectedInfo) => {
        resolve(selectedInfo);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  update(params) {
    return new Promise((resolve, reject) => {
      Login.update(
        params,
        {
          where: { id: params.id },
        },
      ).then(([updated]) => {
        resolve({ updatedCount: updated });
      }).catch((err) => {
        reject(err);
      });
    });
  },
  delete(params) {
    return new Promise((resolve, reject) => {
      Login.destroy({
        where: { id: params.id },
      }).then((deleted) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },
};
module.exports = dao;
