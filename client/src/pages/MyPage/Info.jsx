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
      <Container className="info">
        <h1>000님, 안녕하세용!</h1>
        <Box>
          <Text>이메일 확인</Text>
          <Input placeholder="please check your email" />
        </Box>
        <Modi>확인</Modi>
        <Box>
          <Text>비밀번호 변경</Text>
          <Input placeholder="please enter new password" />
        </Box>
        <Box>
          <Text>비밀번호 확인</Text>
          <Input placeholder="please check new password" />
        </Box>
        <Modi>수정</Modi>
        <MoreBtn>회원 탈퇴</MoreBtn>
      </Container>
    </MyPage>
  );
};
export default Info;
