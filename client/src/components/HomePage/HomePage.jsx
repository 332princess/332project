import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Title, H1, Box, WhiteBox, Image1 } from './style';

const HomePage = () => {
  return (
    <Container>
      <Box>
        <Image1 />
      </Box>
      <Title>Welcome to the home page</Title>
      <H1>대충 웹사이트 소개문구 123456678910</H1>
      <WhiteBox />
    </Container>
  );
};

export default HomePage;

// shift + alt + f = 프리티어인가? eslint인가 둘중에 하나
// 형식에 맞춰서 교정해주는 단축키로 알고있어요.
// 방금 문제는 eslint 라는것과 prettier의 충돌문제고
// 이 충돌 문제가 발생하는 이유가 둘이 교정 규칙이 달라서그래요
// 예를들면 스페이스바 두개를 넣는거라던지 뭐 이런거있잖아여
// 그래서 하나로 교정을 해야해서 저거 단축키만 찾아보심될듯여
