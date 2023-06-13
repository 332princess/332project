import styled from 'styled-components';
// import '../../GlobalStyle';'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 70px;
  margin-top: 10vh;
  color: #fff;
`;

export const H1 = styled.h1`
  font-size: 18px;
  text-align: center;
  color: #fff;
`;

export const Music = styled.div`
  background-image: url('/image1.png');
  background-size: cover;
  margin-top: 30%;
  width: 100px;
  height: 100px;
`;

export const PlayList = styled.div`
  background-image: url('/image2.png');
  background-size: cover;
  margin-top: 30%;
  width: 100px;
  height: 100px;
`;

export const Running = styled.div`
  background-image: url('/image3.png');
  background-size: cover;
  margin-top: 30%;
  width: 100px;
  height: 100px;
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 42vh;
  background-color: white;
  position: fixed;
  bottom: 0;
  v-index: -1;
`;

export const ImageWithTextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 200px;
  background-size: cover;
  justify-content: flex-start;
`;

export const Text = styled.p`
  text-align: center;
`;

export const activeStyle = {
  color: '#fff',
};
