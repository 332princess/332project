const logger = require('../lib/logger');
const playlistDao = require('../dao/playlistDao');

const service = {
  async reg(params) {
    let inserted = null;

    try {
      inserted = await playlistDao.insert(params);
      logger.debug(`(playlistService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(playlistService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },
  async list(params) {
    let result = null;

    try {
      result = await playlistDao.selectList(params);
      logger.debug(`(playlistService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(playlistService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(result);
    });
  },
  async info(params) {
    let result = null;

    try {
      result = await playlistDao.selectInfo(params);
      logger.debug(`(playlistService.info) ${JSON.stringify(result)}`);

      // 조회수 업데이트
      if (result) {
        playlistDao.update({ id: params.id, viewCount: result.viewCount + 1 });
        result.viewCount += 1;
      }
    } catch (err) {
      logger.error(`(playlistService.info) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(result);
    });
  },

  async edit(params) {
    let result = null;

    try {
      result = await playlistDao.update(params);
      logger.debug(`(playlistService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(playlistService.edit) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(result);
    });
  },
  async delete(params) {
    let result = null;

    try {
      result = await playlistDao.delete(params);
      logger.debug(`(playlistService.) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(playlistService.) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(result);
    });
  },
};

module.exports = service;
