import styled from 'styled-components';
// import '../../GlobalStyle';

export const Input = styled.input`
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
`;

export const FindBox = styled.div`
  position: absolute;
  margin-top: 15vh;
  display: flex;
  flex-display: row;
  align-text: center;
  font-size: 12px;
`;

export const Find = styled.a`
  text-decoration-line: none;
  color: #000;
`;
