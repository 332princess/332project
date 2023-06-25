const Sequelize = require('sequelize');

module.exports = class Room extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                room_id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                title: {
                    type: Sequelize.STRING(500),
                    allowNull: false,
                },
                max: {
                    type: Sequelize.INTEGER,
                    default: 2,
                    min: 1,
                }
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
        db.Room.hasMany(db.Chat, {
            foreignKey: { name: 'room' },
            onDelete: 'SET NULL',
            as: 'Chat',
        });
        db.Room.belongsTo(db.Like, {
            foreignKey: { name: 'userId' },
            onDelete: 'SET NULL',
            as: 'Likes',
        });
    }
    // static includeAttributes = ['id', 'name', 'role', 'email', 'phone'];
    //static includeAttributes는 User 클래스의 정적 속성으로, 조회 작업에서 포함할 속성들을 배열로 정의한 것입니다.
};
