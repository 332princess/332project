import styled from 'styled-components';
// import '../../GlobalStyle';
export const Container = styled.div`
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
export const Box = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Song = styled.div`
  background-color: #d9d9d9;
  border-radius: 10px 0px 0px 10px;
  border: none;

  height: 5vh;
  width: 38vw;
  text-align: center;
  line-height: 2;
`;

export const Bar = styled.div`
  border: none;
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

export const MoreBtn = styled.button`
  position: absolute;
  bottom: 10%;
  height: 8%;

  border: none;
  background-color: #ff6060;
  border-radius: 10px;
  width: 65%;

  color: #ffffff;
  font-weight: 100;
  font-size: 35px;
  text-align: center;
  cursor: pointer;
`;

export const Text = styled.div`
  text-align: center;
  margin-right: 10px;
`;

export const Input = styled.input`
  background-color: #d9d9d9;
  border-radius: 10px 0px 0px 10px;
  border: none;

  height: 5vh;
  width: 30vw;
  text-align: center;
  line-height: 2;
`;

export const Modi = styled.button`
  border: none;
  background-color: #ff6060;
  border-radius: 0px 10px 10px 0px;
  width: 5vw;
  color: #fff;
`;
