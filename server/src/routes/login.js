const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const loginService = require('../services/loginService');
const { isLoggedIn } = require('../lib/middleware');
// 등록
// router.use(isLoggedIn);
router.post('/', async (req, res) => {
  try {
    const params = {
      user_id: req.body.user_id,
      password: req.body.password,
      email: req.body.email,
    };
    logger.info(`(login.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.email || !params.password) {
      const err = new Error('Not allowed null (email, password)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }
    // 비즈니스 로직 호출
    console.log(params.email);
    const result = await loginService.login(params);
    console.log(result);
    logger.info(`(login.reg.result) ${JSON.stringify(result)}`);

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
      email: req.query.email,
      loginid: req.query.loginid,
    };
    logger.info(`(login.list.params) ${JSON.stringify(params)}`);

    const result = await loginService.list(params);
    logger.info(`(login.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
