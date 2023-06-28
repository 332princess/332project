import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyChat = ({ title, onClickRoom, hasNew }) => {
  const navigate = useNavigate(); // 변수명 변경: Navigate -> navigate

  const onRoom = () => {
    onClickRoom(title);
    navigate(`/chat/${title}`);
  };

  return (
    <li onClick={onRoom} className="mychat">
      <span className="chat_title">{title}</span>
      <span className={`isNew ${hasNew}`}>!</span>
    </li>
  );
};

export default MyChat;
