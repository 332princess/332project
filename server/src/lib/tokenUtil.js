const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET_KEY;
const options = {
  expiresIn: '9000h', // 만료시간
};

const tokenUtil = {
  // 토큰 생성
  makeToken(param) {
    const payload = {
      id: param.id,
      user_id: param.user_id,
      email: param.email,
    };

    const token = jwt.sign(payload, secretKey, options);

    return token;
  },
  // decryptToken(encryptedToken) {
  //   try {
  //     const decodedToken = jwt.verify(encryptedToken, secretKey);
  //     return {
  //       user_id: decodedToken.user_id,
  //       name: decodedToken.name,
  //       email: decodedToken.email,
  //     };
  //   } catch (error) {
  //     console.error('토큰 복호화 오류:', error.message);
  //     return null;
  //   }
  // },
  verifyToken(token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      // console.log(decoded);

      return decoded;
    } catch (err) {
      return null;
    }
  },

};

module.exports = tokenUtil;
