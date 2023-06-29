import styled from 'styled-components';

export const Container = styled.div`
  /* position: absolute; */
  /* left: 35%; */
  /* top: 14%; */
  /* width: 30%; */
  /* height: 80%; */
  /* min-width: 400px; */
  padding: 40px 60px;
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: fit-content;

  &.login {
    justify-content: center;
  }
  /* z-index: -1; */
  @media (min-width: 768px) {
    /* margin-bottom: 10%; */
    color: #ff6060;
  }
  @media (max-width: 1024px) {
    color: #bbf;
    /* width: 50vw; */
    /* left: 25%; */
  }
  @media (max-width: 768px) {
    background-color: #000;
    color: #fff;
    /* left: 0vw; */
    width: auto;
  }
`;

export const Title = styled.div`
  /* position: absolute; */
  /* top: 10%; */

  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
`;

export const Box = styled.form`
  /* position: absolute; */
  /* top: 33%; */
  width: 240px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3vh;

  @media (min-width: 1024px) {
    /* margin-bottom: 10%; */
  }
  @media (max-width: 1024px) {
    .register {
      gap: 3vh;
    }
  }
`;

export const SubmitBtn = styled.button`
  /* position: absolute; */
  /* bottom: 18%; */
  /* height: 8%; */
  padding: 8px 68px;
  /* width: 18vw; */
  width: 100%;

  font-weight: 100;
  font-size: 32px;
  @media (min-width: 1024px) {
  }
  @media (max-width: 1024px) {
    background-color: #bbf;
    color: #fff;
  }
  @media (max-width: 768px) {
    background-color: #2a2a2a;
    width: auto;
  }
`;

export const Input = styled.input`
  &.login {
    position: relative;
    background-color: #d9d9d9;
    border-radius: 10px 0px 0px 10px;
    border: none;

    height: 5vh;
    width: 100%;

    &:focus {
      outline: none !important;
      border-color: #ff6060;
      box-shadow: 0 0 10px #ff6060;
    }
  }
  &.register {
    height: 40px;
    width: 100%;
    &.email {
      border-radius: 10px 0px 0px 10px;
    }
    &:focus {
      outline: none !important;
      box-shadow: 0 0 10px black;
    }
  }
  @media (min-width: 1024px) {
    width: 15vw;
  }
  @media (max-width: 768px) {
    background-color: #ddd;
    color: #000;
  }
`;

export const FindBox = styled.div`
  /* position: absolute; */
  /* margin-top: 15vh; */
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
  @media (max-width: 768px) {
    color: #fff;
  }
`;
export const InputBox = styled.div`
  display: flex;
  width: 100%;
`;

export const CheckBtn = styled.button`
  border-radius: 0px 10px 10px 0px;
  background-color: #8f8f8f;
  width: 30%;

  @media (max-width: 1024px) {
    background-color: #bbf;
    color: #fff;
    /* height: 5.3vh; */
  }
  @media (max-width: 768px) {
    background-color: #2a2a2a;
    color: #fff;
    &:hover {
      color: #ff6060;
      cursor: pointer;
    }
  }
`;
