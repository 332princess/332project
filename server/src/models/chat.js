const Sequelize = require('sequelize');

module.exports = class Chat extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        chat_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
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
    db.Chat.belongsToMany(db.User, {
      foreignKey: { name: 'user_id', onDelete: 'SET NULL', as: 'Users' },
    });
    // db.Chat.belongsTo(db.Like, {
    //   foreignKey: { name: 'user_id', onDelete: 'SET NULL', as: 'Users' },
    // });
  }
};
