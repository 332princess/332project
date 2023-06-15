import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ROUTE } from '../../Route';
import { Container, Title, Box, SubmitBtn } from '../../components/UserStyle';
import { CheckBtn, Input, InputBox } from '../../components/Register';
import {
  validateNickname,
  validateEmail,
  validatePassword,
} from '../../components/util/usefulFunction';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const nameChange = ({ target: { value } }) => setName(value);
  const emailChange = ({ target: { value } }) => setEmail(value);
  const passwordChange = ({ target: { value } }) => setPassword(value);
  const password2Change = ({ target: { value } }) => setPassword2(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await new Promise((res) => setTimeout(res, 1000));
    if (!name || !email || !password || !password2) {
      let reg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!name) alert('이름을 입력해주세요');
      if (!email) {
        alert('이메일을 입력해주세요');
      } else {
        if (!reg.test(email.toLowerCase())) alert('잘못된 이메일 입니다!');
      }
      if (password.length < 8) {
        alert('8자의 이상의 비밀번호를 사용하셔야 합니다.');
      } else {
        alert(`변경된 패스워드: ${password}`);
      }
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Box style={{ top: '27%' }}>
        <InputBox>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={nameChange}
            placeholder=" Please Enter Your Name"
          />
        </InputBox>
        <InputBox>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={emailChange}
            className="email"
            placeholder=" Please Enter Your Email"
          />
          <CheckBtn>확인</CheckBtn>
        </InputBox>
        <InputBox>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={passwordChange}
            placeholder=" Please Enter Your Password"
          />
        </InputBox>
        <InputBox>
          <Input
            type="password"
            name="confirmPassword"
            value={password2}
            onChange={password2Change}
            placeholder=" Please Enter Your Password Again"
          />
        </InputBox>
      </Box>
      <SubmitBtn type="submit" onClick={handleSubmit}>
        Submit
      </SubmitBtn>
    </Container>
  );
};
export default Register;
