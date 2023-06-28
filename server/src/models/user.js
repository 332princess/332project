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
        //username으로 받아야 채팅할듯?
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
 
};
