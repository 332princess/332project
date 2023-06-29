import React from 'react';
import {
  Container,
  Title,
  TitleBox,
  H1,
  WhiteBox,
  Music,
  PlayList,
  Chat,
  Text,
  ImageWrapper,
  Wrapper,
  Middle,
} from '../../styles/homestyle';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../routes/Route';

const Home = () => {
  return (
    <main>
      <Container>
        <TitleBox>
          <Title>뮤메이트</Title>
          <H1>Made by 삼삼한 녀석 둘</H1>
        </TitleBox>
        <WhiteBox>
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
              <Link to={ROUTE.PLAYLIST.path}>
                <Wrapper>
                  <PlayList />
                  <span>
                    <Text className="playlist">플레이리스트</Text>
                  </span>
                </Wrapper>
              </Link>
            </Middle>
          </ImageWrapper>
          <ImageWrapper>
            <Link to={ROUTE.CHATMAIN.path}>
              <Wrapper>
                <Chat />
                <span>
                  <Text>채팅</Text>
                </span>
              </Wrapper>
            </Link>
          </ImageWrapper>
        </WhiteBox>
      </Container>
    </main>
  );
};

export default Home;
