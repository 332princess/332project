import styled from 'styled-components';
// import '../../GlobalStyle';

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Input = styled.input`
  position: relative;
  background-color: #d9d9d9;
  border-radius: 10px 0px 0px 10px;
  border: none;
  height: 5vh;
  width: 14vw;
  &:focus {
    outline: none !important;
    border-color: #ff6060;
    box-shadow: 0 0 10px #ff6060;
  }
`;

export const CheckBtn = styled.button`
  position: relative;
  border: none;
  background-color: #ff6060;
  border-radius: 0px 10px 10px 0px;
  width: 4vw;
  color: #fff;
  cursor: pointer;
`;
