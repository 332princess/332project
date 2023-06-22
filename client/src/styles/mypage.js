import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: absolute;
  width: 65%;
  height: 74.5%;
  left: 25%;
  top: 10%;

  background: #ffffff;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5%;
  gap: 4%;

  &.info {
    text-align: center;
    align-items: center;
  }
`;
export const BigBox = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 4%;
`;

export const Video = styled.div`
  background-color: #d9d9d9;
  border-radius: 10px 0px 0px 10px;
  border: none;

  height: 5vh;
  width: 38vw;
  text-align: center;
  line-height: 2.5;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
    display: none;
  }
`;

export const Bar = styled.div`
  background-color: #000;
  opacity: 90%;
  border-radius: 0px 10px 10px 0px;
  width: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

export const BarBtn = styled.button`
  background-color: #000;
  width: 50%;
  color: #fff;
`;

export const MoreBtn = styled.button`
  position: absolute;
  bottom: 10%;
  height: 8%;

  border-radius: 10px;
  width: 65%;

  font-weight: 100;
  font-size: 30px;
`;

export const Text = styled.div`
  text-align: center;
  margin-right: 10px;
  line-height: 2;
`;

export const Input = styled.input`
  border-radius: 10px;
  height: 5vh;
  width: 30vw;
  text-align: center;
`;

export const Modi = styled.button`
  width: 5vw;
`;
