const jwt = require('jsonwebtoken');

const secretKey =
  '24432646294A404E635166546A576E5A7234753778214125442A472D4B615064';
const options = {
  expiresIn: '9000h', // 만료시간
};

const tokenUtil = {
  // 토큰 생성
  makeToken(user) {
    const payload = {
      id: user.id,
      user_id: user.user_id,
      email: user.email,
      name: user.name,
      gender: user.gender,
    };

    const token = jwt.sign(payload, secretKey);

    return token;
  },
  verifyToken(token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      console.log(decoded);

      return decoded;
    } catch (err) {
      return null;
    }
  },
  // verifyToken(token) {
  //   try {
  //     const decoded = jwt.verify(token, secretKey);
  //     const id = decoded.id;
  //     return id;
  //   } catch (err) {
  //     return null;
  //   }
  // },
};

module.exports = tokenUtil;
