import React, { useState } from 'react';
import styled from 'styled-components';
import Chat from './chat';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8081');

const ChatmainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  color: #212121;
  font-family: 'Open Sans', sans-serif;
  display: grid;
  place-items: center;
`;

const JoinChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const JoinChatTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const JoinChatInput = styled.input`
  width: 210px;
  height: 40px;
  margin: 7px;
  border: 2px solid #43a047;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
`;

const JoinChatButton = styled.button`
  width: 225px;
  height: 50px;
  margin: 7px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  background: #43a047;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #2e7d32;
  }
`;

const Chatmain = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room);
      setShowChat(true);
    }
  };

  return (
    <ChatmainContainer>
      {!showChat ? (
        <JoinChatContainer>
          <JoinChatTitle>Join A Chat</JoinChatTitle>
          <JoinChatInput
            type="text"
            placeholder="이름"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <JoinChatInput
            type="text"
            placeholder="방이름"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <JoinChatButton onClick={joinRoom}>Join A Room</JoinChatButton>
        </JoinChatContainer>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </ChatmainContainer>
  );
};

export default Chatmain;
