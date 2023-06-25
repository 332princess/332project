const logger = require('../lib/logger');
const userDao = require('../dao/userDao');
const tokenUtil = require('../lib/tokenUtil');
const bcryptUtil = require('../lib/bcryptUtil');

const service = {

  async reg(params) {
    try {
      const hashedPassword = await bcryptUtil.makeHash(params.password);
      logger.debug(`(userService.makeHash) Password: ${hashedPassword}`);

      const newParams = {
        ...params,
        password: hashedPassword,
      };

      // 등록 로직을 처리하고 등록된 사용자 정보를 반환합니다.
      const result = await userDao.insert(newParams);

      return Promise.resolve(result);
    } catch (err) {
      logger.error(`(userService.reg) ${err.toString()}`);
      return Promise.reject(err);
    }
  },


  // selectList
  async list(params) {
    let result = null;
    console.log(params);
    try {
      result = await userDao.selectList(params);
      logger.debug(`(userService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(userService.list) ${err.toString()}`);
      return Promise.reject(err);
    }

    return Promise.resolve(result);
  },

      //   상세조회
  async getUser(params) {
    return new Promise((resolve, reject) => {
      userDao.selectInfo(params)
        .then((selectedOne) => {
          resolve(selectedOne);
        })
        .catch((err) => {
          reject(err);
        });
    })

  },

  //상세삭제
  async deleteUser(params) {
    return new Promise((resolve, reject) => {
     userDao.deleteUser(params)
       .then((result) => {
         resolve(result);
       })
       .catch((err) => {
         logger.error(`(userService.deleteUser) ${err.toString()}`);
         reject(err);
       });
   });
 },

async login(params) {
  try {
    const user = await userDao.selectUserByEmail(params.email);
    if (!user) {
      return Promise.resolve({ success: false, message: 'Invalid email or password' });
    }

    const passwordMatched = await bcryptUtil.compareHash(params.password, user.password);
    if (!passwordMatched) {
      return Promise.resolve({ success: false, message: 'Invalid email or password' });
    }

    // 로그인 성공 - 토큰 생성
    const token = tokenUtil.makeToken(user);
    return Promise.resolve({ success: true, user, token });
  } catch (err) {
    logger.error(`(loginService.login) ${err.toString()}`);
    return Promise.reject(err);
  }
},




};

module.exports = service;
