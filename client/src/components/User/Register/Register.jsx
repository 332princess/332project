import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ROUTE } from '../../../Route';
import { Container, Title, Box, SubmitBtn } from '../../style';
import { CheckBtn, Input, InputBox } from './style';
import {
  validateNickname,
  validateEmail,
  validatePassword,
} from '../../util/usefulFunction';

const Register = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: '',
    email: '',
    password: '',
    img: 'https://foco-images.s3.ap-northeast-2.amazonaws.com/1672209773539_basic_profile.jpg',
  });
  const [error, setError] = useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  });
  const validateConfirmPassword = (password) => {
    return password === info.password;
  };
  const handleChange = (e) => {
    if (e.target.name === 'name') {
      if (!validateNickname(e.target.value)) {
        setError((prev) => ({
          ...prev,
          nameError: 'English only',
        }));
      } else {
        setError((prev) => ({
          ...prev,
          nameError: '',
        }));
        setInfo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    } else if (e.target.name === 'email') {
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
    } else if (e.target.name === 'confirmPassword') {
      if (!validateConfirmPassword(e.target.value)) {
        setError((prev) => ({
          ...prev,
          confirmPasswordError: 'Passwords do not match',
        }));
      } else {
        setError((prev) => ({
          ...prev,
          confirmPasswordError: '',
        }));
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      error.nameError === '' &&
      error.emailError === '' &&
      error.passwordError === '' &&
      error.confirmPasswordError === '' &&
      info.name !== '' &&
      info.email !== '' &&
      info.password !== '' &&
      info.confirmPasswordError === ''
    ) {
      axios
        .post('http://localhost:3000/api/user/register', info)
        .then((res) => {
          alert('Success Register!');
          navigate(`${ROUTE.LOGIN.link}`);
        })
        .catch((error) => {
          alert('This email has already been used.');
        });
    } else {
      alert('Please Check Your Info!');
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Box style={{ top: '27%' }}>
        <InputBox>
          <Input
            type="text"
            name="namw"
            onChange={handleChange}
            placeholder=" Please Enter Your Name"
          />
          <CheckBtn>확인</CheckBtn>
        </InputBox>
        <InputBox>
          <Input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder=" Please Enter Your ID"
          />
          <CheckBtn>확인</CheckBtn>
        </InputBox>
        <InputBox>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder=" Please Enter Your Password"
          />
          <CheckBtn>확인</CheckBtn>
        </InputBox>
        <InputBox>
          <Input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            placeholder=" Please Enter Your Password Again"
          />
          <CheckBtn>확인</CheckBtn>
        </InputBox>
      </Box>
      <SubmitBtn type="submit" onClick={handleSubmit}>
        Submit
      </SubmitBtn>
    </Container>
  );
};
export default Register;
