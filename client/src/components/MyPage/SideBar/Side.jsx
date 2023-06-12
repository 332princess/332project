import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Title, Box, URLs, Logo } from './style';

const Side = () => {
  return (
    <Container>
      <Title>마이페이지</Title>
      <Box>
        <URLs href="/">좋아요</URLs>
        <URLs>플레이리스트</URLs>
        <URLs>내가 달린 거리</URLs>
        <URLs>내 정보 수정</URLs>
        <Logo />
      </Box>
    </Container>
  );
};
export default Side;
