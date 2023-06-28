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
  Wrapper,
  Middle,
  Text1,
} from '../../styles/homestyle';
import { Link } from 'react-router-dom';
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
              <Wrapper>
                <Music />
                <span>
                  <Text>음악</Text>
                </span>
              </Wrapper>
            </Link>
          </ImageWrapper>
          <ImageWrapper>
            <Middle>
              <Link to={PRIVATE_ROUTE.PLAYLIST.path}>
                <Wrapper>
                  <PlayList />
                  <span>
                    <Text1>플레이리스트</Text1>
                  </span>
                </Wrapper>
              </Link>
            </Middle>
          </ImageWrapper>
          <ImageWrapper>
            <Link to={PRIVATE_ROUTE.CHAT.path}>
              <Wrapper>
                <Chat />
                <span>
                  <Text>채팅</Text>
                </span>
              </Wrapper>
            </Link>
          </ImageWrapper>
        </ImageWithTextContainer>
      </WhiteBox>
    </Container>
  );
};

export default Home;
