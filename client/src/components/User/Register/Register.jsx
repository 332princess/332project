import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Title, Box, SubmitBtn } from '../../style';
import { CheckBtn, Input, InputBox } from './style';

const Register = () => {
  return (
    <Container>
      <Title>회원가입</Title>
      <Box>
        <InputBox>
          <Input placeholder="" />
          <CheckBtn />
        </InputBox>
        <InputBox>
          <Input placeholder="" />
          <CheckBtn />
        </InputBox>
        <InputBox>
          <Input placeholder="" />
          <CheckBtn />
        </InputBox>
      </Box>
      <SubmitBtn>Submit</SubmitBtn>
    </Container>
  );
};
export default Register;
