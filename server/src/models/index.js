const { sequelize } = require('./connection');

// const Join = require('./login');
// const Department = require('./department');
const User = require('./user');
// const Board = require('./board');
// const Post = require('./post');
// const Comment = require('./comment');

const db = {};
db.sequelize = sequelize;

// db.Department = Department;
db.User = User;
// db.Login = Login;
// db.Board = Board;
// db.Post = Post;
// db.Comment = Comment;

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