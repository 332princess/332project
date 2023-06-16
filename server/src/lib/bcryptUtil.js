// npm install bcrypt --save : bcrypt 설치

// bcrypt로 비밀번호 암호화 (async)
const bcrypt = require('bcrypt');

// const password = 'password';

const makeHash = async (password, saltRounds = 10) => {
    return await bcrypt.hash(password, saltRounds);
};


// bcrypt 검증
const checkHash = async (password, hashedPassword) => {
    console.log(1);
    // const hashedPassword = makeHash(password, saltRounds=10);
    return await bcrypt.compare(password, hashedPassword);
}
// makehash 10바퀴를 돌리고 checkhash를 한번 더써서 검증을 한다. (로그인)
module.exports = {makeHash,checkHash}