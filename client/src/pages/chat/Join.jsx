import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Loading from './Loading';
import ChatService from '../../services/chat/chat';

const chatService = new ChatService();
const JoinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: var(--primary-color);
`;

const JoinForm = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  background-color: white;
  border-radius: 10px;
  border: 1px solid var(--primary-color);
  box-shadow: 5px 5px 5px 0 #111111);
`;

const Heading = styled.h1`
  width: 100%;
  height: 25%;
  background: var(--secondary-color);
  color: #111111;
  margin: 0;
  border-radius: 10px 10px 0 0;
  padding: 0;
  line-height: 2em;
  text-align: center;
`;

const Form = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinButton = styled.button`
  border: 0;
  background-color: var(--secondary-color);
  height: 30px;
  color: #111111;
  border-radius: 5px;
  margin-left: 5px;
`;

const JoinInput = styled.input`
  border: 1px solid #111111;
  height: 28px;
  width: 200px;
  padding: 0;
`;

const Join = ({ chatService, setUsername }) => {
  const [name, setName] = useState('');
  const [isServer, setIsServer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    chatService
      .runServer()
      .then((data) => {
        console.log(data);
        if (data) setIsServer(true);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log('1');
  const onSubmit = (event) => {
    event.preventDefault();
    setUsername(name);
    chatService.signup(name).catch((error) => console.error(error));
    navigate('/chat', { state: { username: name } });
  };
  return (
    <JoinContainer>
      <JoinForm>
        <Heading>채팅채팅 💌</Heading>
        {isServer ? (
          <Form>
            <JoinInput
              placeholder="Enter Username..."
              className="joinInput"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
            <JoinButton type="submit" onClick={onSubmit}>
              Sign In
            </JoinButton>
          </Form>
        ) : (
          <Loading />
        )}
      </JoinForm>
    </JoinContainer>
  );
};

export default Join;
