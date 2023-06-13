import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Title,
  H1,
  WhiteBox,
  Music,
  PlayList,
  Running,
  Text,
  ImageWithTextContainer,
  ImageWrapper,
} from './style';
import { Routes, Route, Link } from 'react-router-dom';
import { ROUTE } from '../../Route';

const Home = () => {
  return (
    <Container>
      <Title>런메이트</Title>
      <H1>Made by 삼삼한 녀석 둘</H1>
      <WhiteBox>
        <ImageWithTextContainer>
          <Link to={ROUTE.LIKE.path}>
            <ImageWrapper>
              <Music />
              <Text>음악</Text>
            </ImageWrapper>
          </Link>
          <Link to={ROUTE.PLAYLIST.path}>
            <ImageWrapper>
              <PlayList />
              <Text>플레이리스트</Text>
            </ImageWrapper>
          </Link>
          <Link to={ROUTE.RUNNING.path}>
            <ImageWrapper>
              <Running />
              <Text>런닝</Text>
            </ImageWrapper>
          </Link>
        </ImageWithTextContainer>
      </WhiteBox>
      <Routes>
        <Route path="/music" />
        <Route path="/playlist" />
        <Route path="/running" />
      </Routes>
    </Container>
  );
};

export default Home;

// shift + alt + f = 프리티어인가? eslint인가 둘중에 하나
// 형식에 맞춰서 교정해주는 단축키로 알고있어요.
// 방금 문제는 eslint 라는것과 prettier의 충돌문제고
// 이 충돌 문제가 발생하는 이유가 둘이 교정 규칙이 달라서그래요
// 예를들면 스페이스바 두개를 넣는거라던지 뭐 이런거있잖아여
// 그래서 하나로 교정을 해야해서 저거 단축키만 찾아보심될듯여
