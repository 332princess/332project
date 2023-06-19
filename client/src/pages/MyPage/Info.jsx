import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Text,
  MoreBtn,
  Input,
  Modi,
} from '../../components/Detail';
import { MyPage } from '../../components/MyPage';
import Side from './Side';
import { useNavigate, useLocation } from 'react-router-dom';

const Info = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user_id = location.pathname.split('/').pop(); // URL에서 사용자 ID 추출
        const response = await axios.get(
          `http://localhost:8081/users/${user_id}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
            },
          }
        );
        console.log(response);
        setUser(response.data); // 응답에서 사용자 정보를 가져와 상태에 저장
      } catch (err) {
        console.log(err);
        // 에러 처리
      }
    };

    fetchUserInfo();
  }, []);

  const handleDeleteProfile = async (e) => {
    e.preventDefault();

    if (window.confirm('확인을 누르면 회원 정보가 삭제됩니다.')) {
      try {
        await axios.delete(`http://localhost:8081/users/${user.user_id}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });
        localStorage.clear();
        alert('그동안 이용해주셔서 감사합니다.');
        navigate('/');
      } catch (err) {
        alert(err.response.data.message);
      }
    } else {
      return;
    }
  };
  if (!user) {
    return <div>Loading...</div>; // 사용자 정보가 로딩 중일 때의 처리
  }
  return (
    <MyPage>
      <Side />
      <Container className="info">
        <h1>{user.name}님, 안녕하세용!</h1>
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
        <MoreBtn onClick={handleDeleteProfile}>회원 탈퇴</MoreBtn>
      </Container>
    </MyPage>
  );
};
export default Info;
