import React from 'react';
import {
  SideContainer,
  SideBox,
  Title,
  ChatContainer,
  Logo,
} from '../../components/chat/Chatting';

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
