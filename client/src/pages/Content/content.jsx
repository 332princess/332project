import React, { memo } from 'react';
import styled from 'styled-components';
import RoomList from './RoomList/RoomList';
import ChatRoom from './ChatRoom/ChatRoom';
import Header from './Header';

const ContentWrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--primairy-color);
  height: 4em;
  color: var(--secondary-color);
  justify-content: space-between;
  border-bottom: 2px solid rgb(214, 214, 214);
  border-top-right-radius: 15px;
`;

const HeaderText = styled.h1`
  margin: 0;
  padding-top: 0.5em;
  padding-left: 0.5em;
`;

const HeaderUser = styled.p`
  margin: 0;
  margin-top: 0.4em;
  margin-right: 0.4em;
`;

const ChatContainer = styled.div`
  width: 100%;
  height: 95%;
`;

const RoomListWrapper = styled.div`
  list-style: none;
  padding: 0;
`;

const Room = styled.div`
  padding: 0;
  height: 3em;
  margin: 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: var(--primairy-color);
  cursor: pointer;
  border-bottom: 1px solid rgb(212, 212, 212);
`;

const Title = styled.p`
  color: rgb(84, 84, 87);
  margin-left: 0.5rem;
`;

const ChatRoomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Content = memo(
  ({
    currentRoom,
    roomList,
    onClickRoom,
    user,
    sendMessage,
    users,
    message,
    myChatList,
  }) => {
    console.log(roomList);
    return (
      <ContentWrapper>
        <HeaderWrapper>
          <HeaderText>{currentRoom}</HeaderText>
          <HeaderUser>{user}</HeaderUser>
        </HeaderWrapper>
        <ChatContainer>
          {currentRoom === 'list' ? (
            <RoomList roomList={roomList} onClickRoom={onClickRoom} />
          ) : (
            <ChatRoom
              currentRoom={currentRoom}
              message={message}
              user={user}
              users={users}
              sendMessage={sendMessage}
              myChatList={myChatList}
            />
          )}
        </ChatContainer>
      </ContentWrapper>
    );
  }
);

export default Content;
