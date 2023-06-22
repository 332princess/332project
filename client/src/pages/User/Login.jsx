import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import {
  Box,
  Container,
  SubmitBtn,
  Title,
} from '../../components/user/UserStyle';
import { Find, FindBox, Input } from '../../components/user/Login';
import { validateEmail, validatePassword } from '../../util/usefulFunction';
import { login } from '../../services/user/Login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
      if (response.data.success) {
        const { token } = response.data;
        const cookies = new Cookies();
        cookies.set('token', token, { path: '/' });
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        alert('로그인 성공!');
        navigate('/');
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
          style={{ borderRadius: '10px' }}
        />
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="please enter your password"
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
