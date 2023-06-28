import React, { useState } from 'react';
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
} from '../../styles/homestyle';
import { Routes, Route, Link } from 'react-router-dom';
import { ROUTE, PRIVATE_ROUTE } from '../../routes/Route';
import HttpClient from '../../services/chat/http';
import ChatService from '../../services/chat/chat';
const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const chatService = new ChatService(httpClient);
const Home = () => {
  const [username, setUsername] = useState('');
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
            <Link to={PRIVATE_ROUTE.JOIN.path}>
              <Chat
                setUsername={(name) => {
                  setUsername(name);
                }}
              />
              <Text>채팅</Text>
            </Link>
          </ImageWrapper>
        </ImageWithTextContainer>
      </WhiteBox>
      <Routes>
        <Route path="/music" />
        <Route path="/playlist" />
        <Route path="/join" />
      </Routes>
    </Container>
  );
};

export default Home;
