const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET_KEY;

const decryptToken = (encryptedToken) => {
  try {
    const decodedToken = jwt.verify(encryptedToken, secretKey);
    return {
      user_id: decodedToken.user_id,
      name: decodedToken.name,
      email: decodedToken.email,
    };
  } catch (error) {
    console.error('토큰 복호화 오류:', error.message);
    return null;
  }
};

module.exports = decryptToken;