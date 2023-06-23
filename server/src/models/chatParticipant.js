const Sequelize = require('sequelize');

module.exports = class ChatParticipant extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        chat_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
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
    db.ChatParticipant.belongsTo(db.Chat, {
      foreignKey: { name: 'chat_id', onDelete: 'SET NULL', as: 'Chat' },
    });

    db.ChatParticipant.belongsTo(db.Users, {
      foreignKey: { name: 'user_id', onDelete: 'SET NULL', as: 'Users' },
    });
  }
};
