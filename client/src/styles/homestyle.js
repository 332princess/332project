import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  flex-direction: column;
  font-family: 'HSJiptokki-Round';
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
  margin-top: 25vh;
  color: #fff;
`;

export const H1 = styled.h1`
  font-size: 18px;
  text-align: center;
  color: #fff;
`;

export const Music = styled.div`
  background-image: url('/assets/image1.png');
  background-size: cover;
  margin-top: 30%;
  width: 100px;
  height: 100px;
`;

export const PlayList = styled.div`
  background-image: url('/assets/image2.png');
  background-size: cover;
  margin-top: 30%;
  width: 100px;
  height: 100px;
`;

export const Chat = styled.div`
  background-image: url('/assets/image3.png');
  background-size: cover;
  margin-top: 30%;
  width: 100px;
  height: 100px;
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 40vh;
  background-color: white;
  position: fixed;
  bottom: 0;
  v-index: -1;
`;

export const ImageWithTextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  justify-content: space-evenly;

  @midea only all and (min-width: 1024px)
  flex-top: 1;
`;

export const ImageWrapper = styled.div`
  height: 200px;
  background-size: cover;
  align-items: center;
  text-align: center;
`;

export const Text = styled.button`
  font-family: 'HSJiptokki-Round';
  border-radius: 5px;
  background-color: transparent;
  color: #ff6060;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

export const activeStyle = {
  color: '#fff',
};
