const Sequelize = require('sequelize');

module.exports = class Song extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        videoId: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
 
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
    db.Song.hasMany(db.PlayList, {
      foreignKey: { name: 'songId' },
      // onDelete: 'SET NULL',
      as: 'PlayLists',
    });
    db.Song.hasMany(db.Like, {
      foreignKey: { name: 'songId' },
      // onDelete: 'SET NULL',
      as: 'Likes',
    });
  }
};
