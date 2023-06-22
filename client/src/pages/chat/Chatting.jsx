import React, { useState, useEffect } from 'react';
import {
  SideContainer,
  SideBox,
  URLs,
  Title,
  ChatContainer,
  Logo,
} from '../../components/chat/Chatting';
import { PRIVATE_ROUTE_ARR } from '../../routes/Route';

const Chat = () => {
  return (
    <div>
      <SideContainer>
        <Title>내 채팅방</Title>
        <SideBox>
          <Logo />
        </SideBox>
      </SideContainer>
      <ChatContainer>원하는 채팅방 선택해 주셍뇨</ChatContainer>
    </div>
  );
};
export default Chat;
