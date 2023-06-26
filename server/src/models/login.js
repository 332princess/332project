const Sequelize = require('sequelize');

module.exports = class Login extends Sequelize.Model {
    static init(sequelize) {
    return super.init({
    email: {
    type: Sequelize.STRING(500),
    allowNull: false,
    },
    password: {
    type: Sequelize.STRING(500),
    allowNull: false,
    },
    }, {
      sequelize,

      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      // paranoid: true, // deletedAt
    });
  }


};
