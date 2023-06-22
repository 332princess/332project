import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/header/Navbar';
import {
  Container,
  Title,
  H1,
  WhiteBox,
  Music,
  PlayList,
  Chat,
  Text,
  ImageWithTextContainer,
  ImageWrapper,
} from '../../components/home/Home';
import { Routes, Route, Link } from 'react-router-dom';
import { ROUTE, PRIVATE_ROUTE } from '../../routes/Route';

const Home = () => {
  return (
    <Container>
      <Title>뮤메이트</Title>
      <H1>Made by 삼삼한 녀석 둘</H1>
      <WhiteBox>
        <ImageWithTextContainer>
          <ImageWrapper>
            <Link to={ROUTE.VIDEO.path}>
              <Music />
              <Text>음악</Text>
            </Link>
          </ImageWrapper>
          <ImageWrapper>
            <Link to={PRIVATE_ROUTE.PLAYLIST.path}>
              <PlayList />
              <Text>플레이리스트</Text>
            </Link>
          </ImageWrapper>
          <ImageWrapper>
            <Link to={PRIVATE_ROUTE.CHAT.path}>
              <Chat />
              <Text>채팅</Text>
            </Link>
          </ImageWrapper>
        </ImageWithTextContainer>
      </WhiteBox>
      <Routes>
        <Route path="/music" />
        <Route path="/playlist" />
        <Route path="/chat" />
      </Routes>
    </Container>
  );
};

export default Home;
