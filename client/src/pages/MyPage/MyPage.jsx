import React, { useState, useEffect } from 'react';
import { MyPage } from '../../components/mypage/MyPage';
import Side from './Side';
import { Container } from '../../components/mypage/Detail';
import Navbar from '../../components/header/Navbar';

const MyPages = () => {
  return (
    <MyPage>
      {/* <Navbar></Navbar> */}
      <Side />
      <Container>원하는 메뉴를 선택해 주셍뇨</Container>
    </MyPage>
  );
};
export default MyPages;
