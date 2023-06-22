import styled from 'styled-components';
// import '../../GlobalStyle';

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Input = styled.input`
  height: 5vh;
  width: 14vw;
  &:focus {
    outline: none !important;
    box-shadow: 0 0 10px black;
  }
  .email {
    border-radius: 10px 0px 0px 10px;
  }
`;

export const CheckBtn = styled.button`
  border-radius: 0px 10px 10px 0px;
  width: 4vw;
`;
