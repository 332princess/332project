import React, { useState, useEffect } from 'react';
import { MyPage } from './style';
import Side from './SideBar/Side';
import { Container } from './Detail/style';
import Navbar from '../Navbar/Navbar';

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
