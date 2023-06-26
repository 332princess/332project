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
  // // user 입력
  // async reg(params) {
  //   let inserted = null;
  //   // 1. 비밀번호 암호화
  //   let hashPassword = null;
  //   try {
  //     hashPassword = await bcryptUtil.makePasswordHash(params.password);
  //     logger.debug(`(userService.makePassword) ${hashPassword}`);
  //   } catch (err) {
  //     logger.error(`(userService.makePassword) ${err.toString()}`);
  //     return Promise.reject(err);
  //   }

  //   // 2. 사용자 등록 처리
  //   const newParams = {
  //     ...params,
  //     password: hashPassword,
  //   };

  //   try {
  //     inserted = await userDao.insert(newParams);
  //     logger.debug(`(userService.reg) ${JSON.stringify(inserted)}`);
  //   } catch (err) {
  //     logger.error(`(userService.reg) ${err.toString()}`);
  //     return Promise.reject(err);
  //   }

  //   // 결과값 리턴
  //   return Promise.resolve(inserted);
  // },

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

//   async login(params) {
//     // 1. 사용자 조회
//     let user = null;
//     try {
//       user = await userDao.selectUser(params);
//       logger.debug(`(userService.login) ${JSON.stringify(user)}`);

//       // 해당 사용자가 없는 경우 튕겨냄
//       if (!user) {
//         const err = new Error('Incorrect userid or password');
//         logger.error(err.toString());
//         return Promise.reject(err);
//       }
//     } catch (err) {
//       logger.error(`(userService.login) ${err.toString()}`);
//       return Promise.reject(err);
//     }

//     // 2. 비밀번호 비교
//     try {
//       const checkPassword = await hashUtil.checkPasswordHash(params.password, user.password);
//       logger.debug(`(userService.checkPassword) ${checkPassword}`);

//       // 비밀번호 틀린 경우 튕겨냄
//       if (!checkPassword) {
//         const err = new Error('Incorrect userid or password');
//         logger.error(err.toString());
//         return Promise.reject(err);
//       }
//     } catch (err) {
//       logger.error(`(userService.checkPassword) ${err.toString()}`);
//       return Promise.reject(err);
//     }

//     return Promise.resolve(user);
//   },

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
}

};

module.exports = service;
