import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ROUTE } from '../../../Route';
import { Cookies } from 'react-cookie';
import { validateEmail, validatePassword } from '../../util/usefulFunction';
import { Box, Container, SubmitBtn, Title } from '../../style';
import { Find, FindBox, Input } from './style';
import Navbar from '../../Navbar/Navbar';
const Login = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    emailError: '',
    passwordError: '',
  });

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      if (!validateEmail(e.target.value)) {
        setError((prev) => ({
          ...prev,
          emailError: 'This is not a valid email',
        }));
      } else {
        setError((prev) => ({
          ...prev,
          emailError: '',
        }));
        setInfo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    } else if (e.target.name === 'password') {
      if (!validatePassword(e.target.value)) {
        setError((prev) => ({
          ...prev,
          passwordError: 'Must be at 8 characters',
        }));
      } else {
        setError((prev) => ({
          ...prev,
          passwordError: '',
        }));
        setInfo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      error.emailError === '' &&
      error.passwordError === '' &&
      info.email !== '' &&
      info.password !== ''
    ) {
      axios
        .post('http://localhost:3000/login', info)
        .then((res) => {
          const cookies = new Cookies();
          const token = res.data.user.refreshToken;
          const userNum = res.data.user.user.userNum;
          const userName = res.data.user.user.name;
          const userCountry = res.data.user.user.country;
          cookies.set('token', token);
          localStorage.setItem('userNum', userNum);
          localStorage.setItem('userName', userName);
          localStorage.setItem('userCountry', userCountry);
          alert('Success Login!');
          navigate(`${ROUTE.HOME.link}`);
        })
        .catch((error) => {
          console.log(error);
          alert('Please Check Your Email or Password!');
        });
    } else {
      alert('Please Check Your Email or Password!');
    }
  };

  return (
    <Container>
      <Navbar></Navbar>
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
        <Link>
          <Find href="">아이디 찾기</Find>
        </Link>
        &nbsp;|&nbsp;
        <Link>
          <Find href="">비밀번호 찾기</Find>
        </Link>
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
