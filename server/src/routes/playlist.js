const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const playlistService = require('../services/playlistService');
const { isLoggedIn } = require('../lib/middleware');

// 등록
router.post('/', isLoggedIn, async (req, res) => {
  const loginUserId = res.get('userId' || null);
  try {
    const params = {
      title: req.body.title,
      singer: req.body.singer,
      userId: req.body.userId || loginUserId,
    };
    logger.info(`(post.reg.params) ${JSON.stringify(params)}`);

    // 필수값 체크
    if (!params.singer || !params.title) {
      const err = new Error('Not allowed null (singer, title)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await playlistService.reg(params);
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
      title: req.query.title,
      singer: req.query.singer,
      userIds: req.query.userIds ? req.query.userIds.split(',') : null,
    };
    logger.info(`(post.list.params) ${JSON.stringify(params)}`);

    const result = await playlistService.list(params);
    logger.info(`(post.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 상세정보 조회
router.get('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(post.info.params) ${JSON.stringify(params)}`);

    const result = await playlistService.info(params);
    logger.info(`(post.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 수정
router.put('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
      title: req.body.title,
      singer: req.body.singer,
    };
    logger.info(`(post.update.params) ${JSON.stringify(params)}`);

    const result = await playlistService.edit(params);
    logger.info(`(post.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 삭제
router.delete('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(post.delete.params) ${JSON.stringify(params)}`);

    const result = await playlistService.delete(params);
    logger.info(`(post.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
