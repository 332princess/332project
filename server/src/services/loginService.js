const logger = require('../lib/logger');
const loginDao = require('../dao/loginDao');
const bcryptUtil = require('../lib/bcryptUtil');
const tokenUtil = require('../lib/tokenUtil');

const service = {
  async reg(params) {
    try {
      const hashedPassword = await bcryptUtil.makeHash(params.password);
      logger.debug(`(loginService.makeHash) Password: ${hashedPassword}`);

      const newParams = {
        ...params,
        password: hashedPassword,
      };

      // 등록 로직을 처리하고 등록된 사용자 정보를 반환합니다.
      const result = await userDao.insert(newParams);

      return Promise.resolve(result);
    } catch (err) {
      logger.error(`(loginService.reg) ${err.toString()}`);
      return Promise.reject(err);
    }
  },

  async info(params) {
    let result = null;

    try {
      result = await userInfoDao.selectInfo(params);
      logger.debug(`(loginService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(loginService.info) ${err.toString()}`);
      return Promise.reject(err);
    }

    return Promise.resolve(result);
  },

  async login(params) {
    try {
      const user = await loginDao.selectInfoByEmail(params);
      console.log(`user: ${user}`);
      if (!user) {
        return Promise.resolve({
          success: false,
          message: 'Invalid email or password',
        });
      }

      const passwordMatched = await bcryptUtil.checkHash(
        params.password,
        user.password
      );

      console.log(`passwordMatched: ${passwordMatched}`);

      if (!passwordMatched) {
        return Promise.resolve({
          success: false,
          message: 'Invalid email or password',
        });
      }
      console.log(passwordMatched);
      // 로그인 성공 - 토큰 생성
      const token = tokenUtil.makeToken(user);
      console.log(token);
      return { success: true, token };
    } catch (err) {
      logger.error(`(loginService.login) ${err.toString()}`);
      return { success: false, message: 'Failed to login' };
    }
  },
};

module.exports = service;
