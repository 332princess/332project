import React from 'react';
import Side from '../../components/mypage/Side';
import { Page, Container } from '../../styles/mypage';

const MyPages = () => {
  return (
    <Page>
      <Side />
      <Container>원하는 메뉴를 선택해 주세요</Container>
    </Page>
  );
};
export default MyPages;
