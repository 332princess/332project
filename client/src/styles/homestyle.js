import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  flex-direction: column;
  font-family: 'HSJiptokki-Round';

  @media only screen and (max-width: 768px) {
    min-height: 30vh;
    margin-top: 9vh;
  }
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
    margin-top: -15vh;
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

export const WhiteBox = styled.div`
  width: 100%;
  height: 40vh;
  background-color: white;
  bottom: 0;
  z-index: -2;
  overflow-y: auto;
  position: fixed;

  @media only screen and (max-width: 768px) {
    top: 40vh;
    height: 60vh;
    position: absolute;
  }
`;

export const ImageWithTextContainer = styled.div`
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
  margin-top: 50px;
  z-index: 10;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
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
  }
`;

export const Text1 = styled.button`
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
    color: #fff;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    // hight: 100px;
    padding-left: 15vh;
    justify-content: space-between;
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
