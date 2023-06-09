const Sequelize = require('sequelize');

module.exports = class Like extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        // title: {
        //   type: Sequelize.STRING(),
        //   allowNull: false,
        // },
        // singer: {
        //   type: Sequelize.STRING(),
        //   allowNull: false,
        // },
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
  static associate(db) {
    db.Like.belongsTo(db.Song, {
      foreignKey: { name: 'songId', onDelete: 'SET NULL', as: 'Songs' },
    });
    db.Like.belongsTo(db.User, {
      foreignKey: { name: 'user_id', onDelete: 'SET NULL', as: 'Users' },
    });
  }
};
