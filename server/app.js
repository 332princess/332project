const createError = require('http-errors');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Server } = require('socket.io');
const indexRouter = require('./src/routes/index');
const roomRepository = require('./data/room.js');
const userRepository = require('./data/users.js');
const router = require('./router.js')
const models = require('./src/models/index');
const logger = require('./src/lib/logger');
const http =require('http');
dotenv.config();
const { NODE_ENV, PORT, LOGGER_LEVEL } = process.env;

const app = express();
logger.info('app start');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// DB 연결 확인 및 table 생성
models.sequelize
  .authenticate()
  .then(() => {
    logger.info('DB connection success');

    // sequelize sync (table 생성)
    models.sequelize
      .sync()
      .then(() => {
        logger.info('Sequelize sync success');
      })
      .catch((err) => {
        logger.error('Sequelize sync error', err);
      });
  })
  .catch((err) => {
    logger.error('DB Connection fail', err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('uploads'));
app.use('/', indexRouter);
app.use(router);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

const server = http.createServer(app); // app 대신 server를 생성합니다

const io = new Server(server, {
  path: '/socket.io',
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  },
});

io.on('connect', (socket) => {
  let currentRoom;
  logger.debug('aa');
  socket.on('signin', ({ username }) => {
    logger.debug('bb');
    console.log(`@@ 사용자 연결: ${username} (${socket.id})`);

    socket.on('join', async (room) => {
      console.log(`@@ 채팅방 입장 (${username}) to (${room})`);
      logger.debug('cc');
      currentRoom = room;
      socket.join(currentRoom);

      const message = `${username}님이 입장하셨습니다.`;

      socket.to(currentRoom).emit('sendMessage', message, room, 'admin');
    });

    socket.on('user list', async (room) => {
      console.log('user list:');
      console.log(room);
      socket.broadcast.emit('users', { title: room.title, users: room.users });
    });

    socket.on('sendMessage', async (message, sentRoom, sender) => {
      const result = await userRepository.addMessage(username, sentRoom, {
        sender,
        message,
      });
      console.log(result);
      const room = await roomRepository.getRoom(sentRoom);
      const usersInRoom = room.users;
      usersInRoom.forEach((user) => {
        if (user !== username) {
          userRepository.addMessage(user, sentRoom, { sender, message });
        }
      });

      socket.emit('message', { sender, message, sentRoom });
      socket.broadcast.emit('message', {
        sender,
        message,
        sentRoom,
      });
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  logger.debug('여긴찍힘');
});

module.exports = app;
