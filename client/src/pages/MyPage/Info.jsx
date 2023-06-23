import React from 'react';
import axios from 'axios';
import {
  Page,
  Container,
  Box,
  Text,
  MoreBtn,
  Input,
  Modi,
} from '../../styles/mypage';
import Side from '../../components/mypage/Side';
import { useNavigate } from 'react-router-dom';

const handleDeleteProfile = (e, navigate) => {
  e.preventDefault();

  if (window.confirm('확인을 누르면 회원 정보가 삭제됩니다.')) {
    const token = localStorage.getItem('token'); // 토큰 가져오기

    axios
      .delete('http://localhost:8081/users/deleteI', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        alert('그동안 이용해주셔서 감사합니다.');
        localStorage.removeItem('token'); // 토큰 삭제
        navigate('/');
      })
      .catch((err) => alert(err.response.data.message));
  } else {
    return;
  }
};

const Info = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <Side />
      <Container className="info">
        <h1>님, 안녕하세용!</h1>
        <Box>
          <Text>이메일 확인</Text>
          <Input placeholder="please check your email" />
        </Box>
        <Modi>확인</Modi>
        <Box>
          <Text>비밀번호 변경</Text>
          <Input placeholder="please enter new password" />
        </Box>
        <Box>
          <Text>비밀번호 확인</Text>
          <Input placeholder="please check new password" />
        </Box>
        <Modi>수정</Modi>
        <MoreBtn onClick={(e) => handleDeleteProfile(e, navigate)}>
          회원 탈퇴
        </MoreBtn>
      </Container>
    </Page>
  );
};
export default Info;
