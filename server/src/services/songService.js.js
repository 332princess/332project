const logger = require('../lib/logger');
const songDao = require('../dao/songDao');


const service = {

  async reg(params) {
    let inserted = null;
    try{
      inserted = await songDao.insert(params);
      console.log
      logger.debug(`(songService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(songService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
    
    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },
// song post


  

  // selectList
  async list(params) {
    let result = null;
    console.log(params);
    try {
      result = await songDao.selectList(params);
      logger.debug(`(songService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(songService.list) ${err.toString()}`);
      return Promise.reject(err);
    }

    return Promise.resolve(result);
  },




};

module.exports = service;
