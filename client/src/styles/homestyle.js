import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  font-family: 'HSJiptokki-Round';
`;

export const TitleBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  @font-face {
    font-family: 'HSJiptokki-Round';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/HSJiptokki-Round.woff2')
      format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'HSJiptokki-Round';
  font-size: 70px;
  color: #fff;

  @media only screen and (max-width: 1024px) {
    font-size: 65px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

export const H1 = styled.h1`
  font-size: 18px;
  text-align: center;
  color: #fff;

  @media only screen and (max-width: 1024px) {
    font-size: 17px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 80%;
  background-color: white;

  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  height: 200px;
  background-size: cover;
  align-items: center;
  text-align: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 140px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    /* width: 100%; */
    padding-left: 15vh;
    justify-content: space-between;
  }
`;

export const Music = styled.div`
  background-image: url('/assets/image1.png');
  background-size: cover;
  width: 100px;
  height: 100px;

  @media only screen and (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }

  @media only screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const PlayList = styled.div`
  background-image: url('/assets/image2.png');
  background-size: cover;
  width: 95px;
  height: 95px;

  @media only screen and (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }

  @media only screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const Chat = styled.div`
  background-image: url('/assets/image3.png');
  background-size: cover;
  width: 100px;
  height: 100px;

  @media only screen and (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }

  @media only screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const Text = styled.button`
  font-family: 'HSJiptokki-Round';
  background-color: transparent;
  color: #ff6060;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  text-decoration: none;

  @media only screen and (max-width: 1024px) {
    font-size: 17px;
    color: #bbf;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    color: #ff6060;
    &.playlist {
      color: #fff;
    }
  }
`;

export const Middle = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    height: 150px;
    width: 100%;
    align-items: center;
    background-color: #000;
  }
`;
