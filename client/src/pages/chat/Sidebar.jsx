import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';
import MyChatList from './MyChatList.jsx';
import { useNavigate } from 'react-router';

const SideBarContainer = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: var(--secondary-color);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const MakeForm = styled.form`
  height: 10%;
  width: 100%;
`;

const FormInput = styled.input`
  width: 80%;
  margin-left: 1em;
  margin-top: 1em;
`;

const FormButtons = styled.div`
  display: flex;
  width: 90%;
  margin-left: 0.7em;
`;

const Button = styled.div`
  width: 40%;
  height: 2em;
  margin-top: 0.2em;
  margin-left: 0.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
`;

const SideBar = ({
  roomList,
  onClickRoom,
  onRoomListBtn,
  onNewChatBtn,
  addMyChat,
  username,
  message,
  currentRoom,
}) => {
  const [activeForm, setActiveForm] = useState(false);
  const inputRef = useRef();
  const navigate = useNavigate(); // 변수명 변경: Navigate -> navigate

  const onSubmit = (e) => {
    e.preventDefault();
    setActiveForm(false);
    if (inputRef.current.value !== '') {
      onNewChatBtn(inputRef.current.value);
      navigate(`/chat/${inputRef.current.value}`);
    }
  };

  const onClose = (e) => {
    e.preventDefault();
    setActiveForm(false);
  };

  const setActiveStatus = () => {
    setActiveForm(!activeForm);
  };

  return (
    <SideBarContainer>
      {activeForm ? (
        <MakeForm>
          <FormInput ref={inputRef} />
          <FormButtons>
            <Button className="make" onClick={onSubmit}>
              <h3>생성</h3>
            </Button>
            <Button className="close" onClick={onClose}>
              <h3>닫기</h3>
            </Button>
          </FormButtons>
        </MakeForm>
      ) : (
        <Buttons
          onRoomListBtn={onRoomListBtn}
          setActiveStatus={setActiveStatus}
          onClickRoom={onClickRoom}
          username={username}
        />
      )}
      <MyChatList
        roomList={roomList}
        onClickRoom={onClickRoom}
        addMyChat={addMyChat}
        username={username}
        currentRoom={currentRoom}
        message={message}
      />
    </SideBarContainer>
  );
};

export default SideBar;
