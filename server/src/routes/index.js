const express = require('express');
const logger = require('../lib/logger');
const userRouter = require('./user');
const playlistRouter = require('./playlist');
const likeRouter = require('./like');
const songRouter = require('./song');
const loginRouter = require('./login');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/log-test', (req, res, next) => {
  logger.error('This message is error');
  logger.warn('This message is warn');
  logger.info('This message is info');
  logger.verbose('This message is verbose');
  logger.debug('This message is debug');
  logger.silly('This message is silly');

  res.send('log test');
});

router.use('/users', userRouter);
router.use('/playlists', playlistRouter);
router.use('/likes', likeRouter);
router.use('/songs', songRouter);
router.use('/logins', loginRouter);

module.exports = router;
