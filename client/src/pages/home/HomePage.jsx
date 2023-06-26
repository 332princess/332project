import React from 'react';
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

const imageItems = [
  {
    icon: <Music />,
    text: '음악',
    link: ROUTE.VIDEO.path,
  },
  {
    icon: <PlayList />,
    text: '플레이리스트',
    link: PRIVATE_ROUTE.PLAYLIST.path,
  },
  {
    icon: <Chat />,
    text: '채팅',
    link: PRIVATE_ROUTE.CHAT.path,
  },
];

const Home = () => {
  return (
    <Container>
      <Title>뮤메이트</Title>
      <H1>Made by 삼삼한 녀석 둘</H1>
      <WhiteBox>
        <ImageWithTextContainer>
          {imageItems.map((item, index) => (
            <ImageWrapper key={index}>
              <Link to={item.link}>
                {item.icon}
                <Text>{item.text}</Text>
              </Link>
            </ImageWrapper>
          ))}
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
