const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const likeService = require('../services/likeService');
const { isLoggedIn } = require('../lib/middleware');
const tokenUtil  = require('../lib/tokenUtil');

// 등록
router.post('/', isLoggedIn, async (req, res) => {
  try {
    const params = {
      userId: req.body.userId,
      songId: req.body.songId,
    };
    logger.info(`(post.reg.params) ${JSON.stringify(params)}`);

    // 필수값 체크
    if (!params.userId || !params.songId) {
      const err = new Error('Not allowed null (userId, songId)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await likeService.reg(params);
    logger.info(`(post.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});


// 리스트 조회
router.get('/like',isLoggedIn, async (req, res) => {
  console.log(req.headers)
  const token = req.headers.authorization.replace('Bearer ', '');
   const decoded = tokenUtil.verifyToken(token)
   console.log(decoded)
   const userId = decoded.user_id;

  try {
    const params = {
      user_id: userId,
      songId: req.query.songId
    };
    console.log(params)
    logger.info(`(post.list.params) ${JSON.stringify(params)}`);

    const result = await likeService.list(params);
    logger.info(`(post.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});


// // 상세정보 조회 얜 아직 모르겠음
// router.get('/:id', async (req, res) => {
//   try {
//     const params = {
//       id: req.params.id,
//     };
//     logger.info(`(post.info.params) ${JSON.stringify(params)}`);

//     const result = await likeService.info(params);
//     logger.info(`(post.info.result) ${JSON.stringify(result)}`);

//     // 최종 응답
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ err: err.toString() });
//   }
// });

// // 수정
// router.put('/:id', async (req, res) => {
//   try {
//     const params = {
//       userId: req.query.userId,
//       songId: req.query.songId,
//     };
//     logger.info(`(post.update.params) ${JSON.stringify(params)}`);

//     const result = await likeService.edit(params);
//     logger.info(`(post.update.result) ${JSON.stringify(result)}`);

//     // 최종 응답
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ err: err.toString() });
//   }
// });


// 삭제 필요해보이는데;; '/:userId/:songId'이게 맞나 모르겠음
router.delete('/:userId/:songId', async (req, res) => {
  try {
    const params = {
      userId: req.params.userId,
      songId: req.params.songId,
    };
    logger.info(`(post.delete.params) ${JSON.stringify(params)}`);

    const result = await likeService.delete(params);
    logger.info(`(post.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
