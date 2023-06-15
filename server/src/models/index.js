const { sequelize } = require('./connection');

// const Join = require('./login');
// const Department = require('./department');
const User = require('./user');
const Song = require('./song');
const Like = require('./like');
const PlayList = require('./playlist');

const db = {};
db.sequelize = sequelize;

// db.Department = Department;
db.User = User;
db.Song = Song;
db.PlayList = PlayList;
db.Like = Like;

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
