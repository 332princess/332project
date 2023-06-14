import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Text,
  MoreBtn,
  Input,
  Modi,
} from '../../components/Detail';
import { MyPage } from '../../components/MyPage';
import Side from './Side';

const Info = () => {
  return (
    <MyPage>
      <Side />
      <Container>
        <h1>000님, 안녕하세용!</h1>
        <Box>
          <Text>아이디 변경</Text>
          <Input placeholder="please" />
          <Modi>수정</Modi>
        </Box>
        <Box>
          <Text>아이디 변경</Text>
          <Input placeholder="please" />
          <Modi>수정</Modi>
        </Box>
        <Box>
          <Text>아이디 변경</Text>
          <Input placeholder="please" />
          <Modi>수정</Modi>
        </Box>
        <MoreBtn>회원 탈퇴</MoreBtn>
      </Container>
    </MyPage>
  );
};
export default Info;
