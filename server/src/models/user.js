const Sequelize = require('sequelize');

module.exports = class Users extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        gender: {
          type: Sequelize.BOOLEAN,
        },
      },
      {
        sequelize,
        // tableName: 'tableName', // table명을 수동으로 생성 함
        // freezeTableName: true, // true: table명의 복수형 변환을 막음
        underscored: true, // true: underscored, false: camelCase
        timestamps: true, // createAt, updatedAt
        // paranoid: true, // deletedAt
      }
    );
  }

  //테이블 생성

  //   static associate(db) {
  //     db.User.belongsTo(db.Department, { foreignKey: { name: 'departmentId', onDelete: 'SET NULL', as: 'Department' } });
  //     db.User.hasMany(db.Board, { foreignKey: { name: 'userId', onDelete: 'SET NULL', as: 'Boards' } });
  //     db.User.hasMany(db.Post, { foreignKey: { name: 'userId', onDelete: 'SET NULL', as: 'Posts' } });
  //     db.User.hasMany(db.Comment, { foreignKey: { name: 'userId', onDelete: 'SET NULL', as: 'Comments' } });
  //   }
  //관계설정을 나중에 해주자구
  static associate(db) {
    db.User.hasMany(db.PlayList, {
      foreignKey: { name: 'userId' },
      onDelete: 'SET NULL',
      as: 'PlayLists',
    });
    db.User.hasMany(db.Like, {
      foreignKey: { name: 'userId' },
      onDelete: 'SET NULL',
      as: 'Likes',
    });
  }
  // static includeAttributes = ['id', 'name', 'role', 'email', 'phone'];
  //static includeAttributes는 User 클래스의 정적 속성으로, 조회 작업에서 포함할 속성들을 배열로 정의한 것입니다.
};
