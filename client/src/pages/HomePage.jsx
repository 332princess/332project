import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
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
} from '../components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import { ROUTE, PRIVATE_ROUTE } from '../Route';

const Home = () => {
  return (
    <Container>
      <Title>런메이트</Title>
      <H1>Made by 삼삼한 녀석 둘</H1>
      <WhiteBox>
        <ImageWithTextContainer>
          <Link to={ROUTE.SONG.path}>
            <ImageWrapper>
              <Music />
              <Text>음악</Text>
            </ImageWrapper>
          </Link>
          <Link to={PRIVATE_ROUTE.PLAYLIST.path}>
            <ImageWrapper>
              <PlayList />
              <Text>플레이리스트</Text>
            </ImageWrapper>
          </Link>
          <Link to={PRIVATE_ROUTE.CHAT.path}>
            <ImageWrapper>
              <Chat />
              <Text>런닝</Text>
            </ImageWrapper>
          </Link>
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
