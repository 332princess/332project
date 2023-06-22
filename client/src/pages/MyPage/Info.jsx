import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Text,
  MoreBtn,
  Input,
  Modi,
} from '../../components/mypage/Detail';
import { MyPage } from '../../components/mypage/MyPage';
import Side from './Side';
import { useNavigate } from 'react-router-dom';

const getUserIdFromCookie = () => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('user_id=')) {
      return cookie.substring('user_id='.length, cookie.length);
    }
  }
  return null; // 쿠키에서 user_id를 찾지 못한 경우
};

const handleDeleteProfile = (e, navigate) => {
  e.preventDefault();
  const user_id = getUserIdFromCookie(); // 동적으로 user_id 가져오기
  if (user_id) {
    if (window.confirm('확인을 누르면 회원 정보가 삭제됩니다.')) {
      axios
        .delete(`http://localhost:8081/users/${user_id}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        })
        .then(() => {
          localStorage.clear();
          alert('그동안 이용해주셔서 감사합니다.');
          navigate('/');
        })
        .catch((err) => alert(err.response.data.message));
    } else {
      return;
    }
  } else {
    // user_id가 없는 경우에 대한 처리
    alert('user_id를 가져올 수 없습니다.');
  }
};

const Info = () => {
  const navigate = useNavigate();
  return (
    <MyPage>
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
    </MyPage>
  );
};
export default Info;
