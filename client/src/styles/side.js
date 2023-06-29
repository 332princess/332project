import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  width: 15%;
  height: 80%;
  left: 7%;
  top: 10%;

  background: #ffffff;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // @media (max-width: 768px) {
  //   display: none;
  // }
`;

export const Title = styled.div`
  position: absolute;
  top: 8%;

  font-weight: 900;
  font-size: 30px;
`;

export const Box = styled.div`
  position: relative;
  background-color: #ff6060;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 30px;
  gap: 3vh;
  border-radius: 10px;

  margin-top: 40%;
  width: 70%;
  height: 65%;
  font-size: 14px;

  @media only screen and (max-width: 1024px) {
    background-color: #bbf;
  }

  @media only screen and (max-width: 768px) {
    background-color: #000;
  }
`;

// export const SideBox =

export const URLs = styled(NavLink)`
  text-decoration-line: none;
  color: #fff;
`;

export const Logo = styled.div`
  background-image: url('/assets/logoMyu.png');
  background-size: cover;
  margin-top: 30%;
  width: 45px;
  height: 45px;
  border-radius: 100%;'

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 768px) {
  }
`;
