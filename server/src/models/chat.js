const Sequelize = require('sequelize');

module.exports = class Chat extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                user: {
                    type: Sequelize.STRING(500),
                },
                chat: {
                    type: Sequelize.STRING(500),
                },
                gif: {
                    type: Sequelize.STRING(500),
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
