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
  font-size: 60px;
  margi-top: 20px;
`;

export const Box = styled.div``;

export const H1 = styled.h1`
  font-size: 18px;
  text-align: center;
`;

export const WhiteBox = styled.div`
  background-color: white;
  width: 100%;
  height: 300px;
  position: absolute;
  bottom: 0;
`;

export const Image1 = styled.div`
  background-image: url('./image1.png');
  background-size: cover;
  margin-top: 30%;
  width: 45%;
  height: 20%;
  border-radius: 100%;
`;
