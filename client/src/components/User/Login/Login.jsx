import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, SubmitBtn, Title } from '../../style';
import { Find, FindBox, Input } from './style';
// import { Container } from './style';

const Login = () => {
  return (
    <Container>
      <Title>로그인</Title>
      <Box style={{ gap: '40px' }}>
        <Input style={{ borderRadius: '10px' }} />
        <Input style={{ borderRadius: '10px' }} />
      </Box>
      <FindBox>
        <Find href="">아이디 찾기</Find>
        &nbsp;|&nbsp;
        <Find href="">비밀번호 찾기</Find>
        &nbsp;|&nbsp;
        <Find href="">회원가입</Find>
      </FindBox>
      <SubmitBtn>Submit</SubmitBtn>
    </Container>
  );
};
export default Login;
