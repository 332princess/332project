const { Op } = require('sequelize');
const { Login,User } = require('../models/index');

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
  //list는 나중에 만들고 아래는 그냥 select로 변경하기
  async selectList(params) {
    
      const setQuery = await User.findOne({
      where: {email: params.email},
    });
    console.log(setQuery);
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
      User.findOne({
        where: {email: params.email},
      }).then((selectedInfo) => {
        resolve(selectedInfo);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  selectInfoByEmail(params) {
    return new Promise((resolve, reject) => {
      User.findOne({
        where: {email: params.email},
      }).then((selectedInfo) => {
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
