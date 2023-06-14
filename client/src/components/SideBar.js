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
`;

// export const SideBox =

export const URLs = styled(NavLink)`
  text-decoration-line: none;
  color: #fff;
`;

export const Logo = styled.div`
  background-image: url('/logoMyu.png');
  background-size: cover;
  margin-top: 30%;
  width: 45%;
  height: 20%;
  border-radius: 100%;
`;
