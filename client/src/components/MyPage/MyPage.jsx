import React, { useState, useEffect } from 'react';
import { MyPage } from './style';
import Side from './SideBar/Side';
import { Container } from './Detail/style';

const MyPages = () => {
  return (
    <MyPage>
      <Side />
      <Container>원하는 메뉴를 선택해 주셍뇨</Container>
    </MyPage>
  );
};
export default MyPages;
