import React from 'react';
import { MyPage } from '../../components/MyPage';
import Side from './Side';
import { Container } from '../../components/Detail';

const MyPages = () => {
  return (
    <MyPage>
      <Side />
      <Container>원하는 메뉴를 선택해 주세요</Container>
    </MyPage>
  );
};
export default MyPages;
