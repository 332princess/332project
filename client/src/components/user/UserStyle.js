import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 30%;
  height: 80%;
  left: 35%;
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
  top: 10%;

  font-weight: 600;
  font-size: 50px;
  line-height: 60px;
`;

export const Box = styled.form`
  position: absolute;
  top: 33%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3vh;
`;

export const SubmitBtn = styled.button`
  position: absolute;
  bottom: 18%;
  height: 8%;
  width: 18vw;

  font-weight: 100;
  font-size: 35px;
`;
