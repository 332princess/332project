import React, { useState, useEffect } from 'react';
import { MyPage } from '../../components/mypage/MyPage';
import Side from './Side';
import { Container } from '../../components/mypage/Detail';
import Navbar from '../../components/header/Navbar';

const MyPages = () => {
  return (
    <MyPage>
      <Side />
      <Container>원하는 메뉴를 선택해 주세요</Container>
    </MyPage>
  );
};
export default MyPages;
