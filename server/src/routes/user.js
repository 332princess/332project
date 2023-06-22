const express = require('express');
const tokenUtil = require('../lib/tokenUtil');
const router = express.Router();
const logger = require('../lib/logger');
const userService = require('../services/userService');
// const decryptToken = require('../lib/decryptToken');
const { isLoggedIn } = require('../lib/middleware');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      user_id: req.params.user_id,
      name: req.body.name,
      // userid: req.body.userid,
      password: req.body.password,
      email: req.body.email,
      gender: req.body.gender,
    };
    logger.info(`(user.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.name || !params.email || !params.password) {
      const err = new Error('Not allowed null (name, email, password)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await userService.reg(params);
    logger.info(`(user.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 리스트 조회
router.get('/', async (req, res) => {
  try {
    const params = {
      user_id: req.params.user_id,
      name: req.query.name,
      userid: req.query.userid,
    };
    logger.info(`(user.list.params) ${JSON.stringify(params)}`);

    const result = await userService.list(params);
    logger.info(`(user.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 상세 조회
router.get('/:user_id', async (req, res) => {
  try {
    const params = {
      user_id: req.params.user_id,
      token: req.headers.token,
    };
    logger.info(`(user.detail.params) ${JSON.stringify(params)}`);

    const result = await userService.getUser(params);
    logger.info(`(user.detail.result) ${JSON.stringify(result)}`);

    // 사용자가 존재하지 않을 경우 에러 처리
    if (!result) {
      const err = new Error('User not found');
      logger.error(err.toString());
      res.status(404).json({ err: err.toString() });
      return;
    }

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

router.delete('/deleteI',isLoggedIn, async (req, res) => {
  const decoded = tokenUtil.verifyToken(req.headers.token)
  const user_id = decoded.user_id
  try {
    const params = {
       user_id: user_id,
    
    };
   logger.info(`(user.deleteUser.params) ${JSON.stringify(params)}`);
    const result = await userService.deleteUser(params);
    logger.info(`(user.deleteUser.result) ${JSON.stringify(result)}`);

    // 삭제된 사용자가 없을 경우 에러 처리
    // if (result === 0) {
    //   const err = new Error('User not found');
    //   logger.error(err.toString());
    //   res.status(404).json({ err: err.toString() });
    //   return;
    // }

    // 최종 응답
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// // 암호화 된 토큰을 복호화하고 user_id와 name 값 추출
// router.get('/decryptToken', (req, res) => {
//   const encryptedToken = req.headers.authorization.replace('Bearer','');
//   const decodedToken = decryptToken(encryptedToken);
//   console.log(encryptedToken)
//   console.log(encryptedToken,decoded)
// console.log(decodedToken);
//   if (decodedToken) {
//     const { user_id, name } = decodedToken;
//     res.status(200).json({ user_id, name });
//   } else {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// });

module.exports = router;
