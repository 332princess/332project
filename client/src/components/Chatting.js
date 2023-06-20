import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideContainer = styled.div`
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

export const SideBox = styled.div`
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

export const ChatContainer = styled.div`
  position: absolute;
  width: 65%;
  height: 69%;
  left: 25%;
  top: 10%;

  background: #ffffff;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  gap: 4%;
`;
export const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Chat = styled.div`
  background-color: #d9d9d9;
  border-radius: 10px 0px 0px 10px;

  height: 5vh;
  width: 38vw;
  text-align: center;
  line-height: 2;
`;

export const Bar = styled.div`
  background-color: #ff6060;
  border-radius: 0px 10px 10px 0px;
  width: 5vw;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

export const BarBtn = styled.button`
  width: 50%;
`;

export const MoreBtn = styled.button`
  position: absolute;
  bottom: 10%;
  height: 8%;

  width: 65%;
  font-weight: 100;
  font-size: 35px;
  text-align: center;
`;

export const Text = styled.div`
  text-align: center;
  margin-right: 10px;
`;

export const Input = styled.input`
  border-radius: 10px 0px 0px 10px;
  height: 5vh;
  width: 30vw;
  line-height: 2;
`;

export const Modi = styled.button`
  border-radius: 0px 10px 10px 0px;
  width: 5vw;
`;
