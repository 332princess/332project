const { sequelize } = require('./connection');

const Login = require('./login');
const User = require('./user');
const Song = require('./song');
const Like = require('./like');
const PlayList = require('./playlist');
const Room = require('./room');
const Chat = require('./chat');

const db = {};
db.sequelize = sequelize;

db.User = User;
db.Song = Song;
db.PlayList = PlayList;
db.Like = Like;
db.Login = Login;
db.Room = Room;
db.Chat = Chat;

Object.keys(db).forEach((modelName) => {
  if (db[modelName].init) {
    db[modelName].init(sequelize);
  }
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
