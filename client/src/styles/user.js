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

export const Input = styled.input`
  &.login {
    position: relative;
    background-color: #d9d9d9;
    border-radius: 10px 0px 0px 10px;
    border: none;

    height: 5vh;
    width: 15vw;

    &:focus {
      outline: none !important;
      border-color: #ff6060;
      box-shadow: 0 0 10px #ff6060;
    }
  }
  &.register {
    height: 5vh;
    width: 14vw;
    &.email {
      border-radius: 10px 0px 0px 10px;
    }
    &:focus {
      outline: none !important;
      box-shadow: 0 0 10px black;
    }
  }
`;

export const FindBox = styled.div`
  position: absolute;
  margin-top: 15vh;
  display: flex;
  flex-display: row;
  align-text: center;
  font-size: 12px;
`;

export const Find = styled.span`
  text-decoration-line: none;
  color: #000;
  font-weight: 600;
  color: #212121;
  & > a {
    all: unset;
  }
  &:hover {
    color: #ff6060;
    cursor: pointer;
  }
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CheckBtn = styled.button`
  border-radius: 0px 10px 10px 0px;
  width: 4vw;
`;
