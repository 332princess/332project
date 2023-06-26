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
    const setQuery = {
      where: {},
      attributes: ['videoId'], // videoId만 선택하도록 지정
      order: [['id', 'DESC']],
    };
  
    if (params.videoId) {
      setQuery.where.videoId = { [Op.like]: `%${params.videoId}%` };
    }
  
    return Song.findAndCountAll(setQuery);
  }

};

module.exports = dao;
