import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {
  SideContainer,
  SideBox,
  Title,
  ChatContainer,
  Logo,
} from '../../components/chat/Chatting';

const Chat = () => {
  const socket = io.connect('localhost:8081', {
    path: '/socket.io',
    transports: ['websocket'],
  });
  socket.on('new', (data) => {
    console.log(data);
    socket.emit('reply', 'Hello');
  });
  // const SocketContext = React.createContext();

  // useEffect(async () => {
  //   socket.emit('add user', nickname);
  // },[]);

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
