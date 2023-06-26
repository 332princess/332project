const Sequelize = require('sequelize');

module.exports = class PlayList extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        // title: {
        //   type: Sequelize.STRING(255),
        //   allowNull: false,
        // },
        // singer: {
        //   type: Sequelize.STRING(50),
        //   allowNull: false,
        // },
        // listSum: {
        //   type: Sequelize.INTEGER,
        // },
      },
      {
        sequelize,
        underscored: true, // true: underscored, false: camelCase
        timestamps: true, // createAt, updatedAt
        // paranoid: true, // deletedAt
      }
    );
  }
  static associate(db) {
    db.PlayList.belongsTo(db.Song, {
      foreignKey: { name: 'songId', as: 'Songs' },
    });
    db.PlayList.belongsTo(db.User, {
      foreignKey: { name: 'user_id', as: 'Users' },
    });
  }
};
