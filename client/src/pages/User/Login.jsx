import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ROUTE } from '../../Route';
import { Cookies } from 'react-cookie';
import { Box, Container, SubmitBtn, Title } from '../../components/UserStyle';
import { Find, FindBox, Input } from '../../components/Login';
import {
  validateEmail,
  validatePassword,
} from '../../components/util/usefulFunction';

const Login = () => {
  const navigate = useNavigate();
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
      // 로그인 요청을 보내고 응답을 받아옴
      const response = await axios.post('http://localhost:8081/logins', {
        email,
        password,
      });
      // console.log(response.data);
      if (response.data.success) {
        // 로그인 성공
        const { token } = response.data;
        const cookies = new Cookies();
        cookies.set('token', token);
        localStorage.setItem('token', token);

        alert('로그인 성공!');
        window.location.href = '/'; // 페이지 새로고침 및 리다이렉트
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
