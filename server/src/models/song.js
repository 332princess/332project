const Sequelize = require('sequelize');

module.exports = class Song extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        singer: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        Music_no: {
          type: Sequelize.INTEGER,
        },
        play_time: {
          type: Sequelize.TIME,
        },
      },
      {
        sequelize,
        underscored: true, // true: underscored, false: camelCase
        timestamps: true, // createAt, updatedAt
        paranoid: true, // deletedAt
      }
    );
  }
  static associate(db) {
    db.Song.hasMany(db.PlayList, {
      foreignKey: { name: 'songId' },
      onDelete: 'SET NULL',
      as: 'PlayList',
    });
    db.Song.hasMany(db.Like, {
      foreignKey: { name: 'songId' },
      onDelete: 'SET NULL',
      as: 'Like',
    });
  }
};
