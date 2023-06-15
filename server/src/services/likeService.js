const logger = require('../lib/logger');
const likeDao = require('../dao/likeDao');

const service = {
  async reg(params) {
    let inserted = null;

    try {
      inserted = await likeDao.insert(params);
      logger.debug(`(likeService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(likeService.reg) ${err.toString()}`);
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
      result = await likeDao.selectList(params);
      logger.debug(`(likeService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(likeService.list) ${err.toString()}`);
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
      result = await likeDao.selectInfo(params);
      logger.debug(`(likeService.info) ${JSON.stringify(result)}`);

      // 조회수 업데이트
      if (result) {
        likeDao.update({ id: params.id, viewCount: result.viewCount + 1 });
        result.viewCount += 1;
      }
    } catch (err) {
      logger.error(`(likeService.info) ${err.toString()}`);
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
      result = await likeDao.update(params);
      logger.debug(`(likeService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(likeService.edit) ${err.toString()}`);
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
      result = await likeDao.delete(params);
      logger.debug(`(likeService.) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(likeService.) ${err.toString()}`);
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
