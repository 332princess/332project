import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import {
  Box,
  Container,
  SubmitBtn,
  Title,
  Find,
  FindBox,
  Input,
} from '../../styles/user';
import { validateEmail, validatePassword } from '../../util/usefulFunction';
import { login } from '../../services/user/Login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'id') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    if (!email || !password) {
      alert('이메일과 비밀번호를 입력해주세요!');
      return;
    }
    if (!validateEmail(email)) {
      alert('유효한 이메일 주소를 입력해주세요!');
      return;
    }
    if (!validatePassword(password)) {
      alert('비밀번호는 최소 8자 이상이어야 합니다!');
      return;
    }

    try {
      const response = await login(email, password);
      if (response.success) {
        const { token } = response;
        console.log(token);
        const cookies = new Cookies();
        cookies.set('token', token, { path: '/' });
        localStorage.setItem('token', token); // 토큰을 로컬 스토리지에 저장
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        alert('로그인 성공!');
        window.location.href = '/';
      } else {
        // 로그인 실패
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Failed to login:', error);
      alert('로그인 실패!');
    }
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Box style={{ gap: '40px' }}>
        <Input
          type="text"
          name="id"
          onChange={handleChange}
          placeholder="please enter your id"
          className="login"
          style={{ borderRadius: '10px' }}
        />
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="please enter your password"
          className="login"
          style={{ borderRadius: '10px' }}
        />
      </Box>
      <FindBox>
        <Find>
          <Link to="#">아이디 찾기</Link>
        </Find>
        &nbsp;|&nbsp;
        <Find>
          <Link to="#">비밀번호 찾기</Link>
        </Find>
        &nbsp;|&nbsp;
        <Find>
          <Link to={'/register'}>회원가입</Link>
        </Find>
      </FindBox>
      <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
    </Container>
  );
};
export default Login;
