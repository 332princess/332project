const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const songService = require('../services/songService.js');
// const { isLoggedIn } = require('../lib/middleware');

// 등록
router.post('/', async (req, res) => {
  // const loginUserId = res.get('user_id' || null);
  try {
    const params = {
      videoId: req.body.videoId
    };
    console.log(params);
    logger.info(`(post.reg.params) ${JSON.stringify(params)}`);

    // // 필수값 체크
    // if (!params.videoId) {
    //   const err = new Error('Not allowed null (videoId)');
    //   logger.error(err.toString());

    //   res.status(500).json({ err: err.toString() });
    // }


    // 비즈니스 로직 호출
    const result = await songService.reg(params);
    logger.info(`(post.reg.result) ${JSON.stringify(result)}`);

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
      videoId: req.query.videId,
    };
    logger.info(`(post.list.params) ${JSON.stringify(params)}`);

    const result = await songService.list(params);
    logger.info(`(post.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});


module.exports = router;
