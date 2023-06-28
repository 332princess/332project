import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadingMessage = styled.label`
  margin-top: 10px;
  font-size: 16px;
  color: #666;
`;

const Loading = (props) => {
  const LoadingDots = keyframes`
    0%, 100% {
      content: ".";
    }
    33% {
      content: "..";
    }
    66% {
      content: "...";
    }
  `;

  const Loader = styled.div`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    color: #333;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 100%;
      display: inline-block;
      width: 1em;
      animation: ${LoadingDots} 1s infinite;
    }
  `;

  return (
    <LoadContainer>
      <Loader>로딩 중</Loader>
      <LoadingMessage>잠시 기다려주세요</LoadingMessage>
    </LoadContainer>
  );
};

export default Loading;
