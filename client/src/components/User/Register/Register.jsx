import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Title, Box, SubmitBtn } from '../../style';
import { CheckBtn, Input, InputBox } from './style';

const Register = () => {
  return (
    <Container>
      <Title>회원가입</Title>
      <Box style={{ top: '27%' }}>
        <InputBox>
          <Input placeholder=" Please Enter Your Name" />
          <CheckBtn>확인</CheckBtn>
        </InputBox>
        <InputBox>
          <Input placeholder=" Please Enter Your ID" />
          <CheckBtn>확인</CheckBtn>
        </InputBox>
        <InputBox>
          <Input placeholder=" Please Enter Your Password" />
          <CheckBtn>확인</CheckBtn>
        </InputBox>
        <InputBox>
          <Input placeholder=" Please Enter Your Password Again" />
          <CheckBtn>확인</CheckBtn>
        </InputBox>
      </Box>
      <SubmitBtn>Submit</SubmitBtn>
    </Container>
  );
};
export default Register;
