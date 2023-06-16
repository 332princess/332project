const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const userService = require('../services/userService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
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


router.delete('/:user_id', async (req, res) => {
  try {
    const params = {
      user_id: req.params.user_id,
    };
    logger.info(`(user.delete.params) ${JSON.stringify(params)}`);

    const result = await userService.deleteUser(params);
    logger.info(`(user.delete.result) ${JSON.stringify(result)}`);

    // 삭제된 사용자가 없을 경우 에러 처리
    if (result === 0) {
      const err = new Error('User not found');
      logger.error(err.toString());
      res.status(404).json({ err: err.toString() });
      return;
    }

    // 최종 응답
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});


module.exports = router;
