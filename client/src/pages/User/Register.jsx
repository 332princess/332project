import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ROUTE } from '../../Route';
import { Container, Title, Box, SubmitBtn } from '../../components/UserStyle';
import { CheckBtn, Input, InputBox } from '../../components/Register';
import {
  validateNickname,
  validateEmail,
  validatePassword,
} from '../../components/util/usefulFunction';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    fetchEmailList();
  }, []);

  const fetchEmailList = async () => {
    try {
      const response = await axios.get('http://localhost:8081/users');
      setEmailList(
        response.data?.rows.map((v, i) => {
          return v.email;
        })
      );
    } catch (error) {
      console.error('Failed to fetch email list:', error);
    }
  };

  console.log(emailList);

  const nameChange = ({ target: { value } }) => setName(value);
  const emailChange = ({ target: { value } }) => setEmail(value);
  const passwordChange = ({ target: { value } }) => setPassword(value);
  const password2Change = ({ target: { value } }) => setPassword2(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await new Promise((res) => setTimeout(res, 1000));
    if (!name || !email || !password || !password2) {
      if (!name && !email && !password && !password2) {
        alert('정보를 입력해주세요!');
      } else {
        let reg =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!name) alert('이름을 입력해주세요');
        else if (!password) alert('비밀번호를 입력해주세요!');
        else if (!password2) alert('비밀번호를 확인해주세요!');
        else if (!email) {
          alert('이메일을 입력해주세요');
        } else {
          if (!reg.test(email.toLowerCase())) alert('잘못된 이메일 입니다!');
          else alert('중복 확인을 해주세요!');
        }
      }
    } else if (password.length < 8)
      alert('8자의 이상의 비밀번호를 사용하셔야 합니다.');
    else if (password !== password2) alert('비밀번호를 재확인해주세요!');
    else {
      try {
        await axios.post('http://localhost:8081/users', {
          name,
          email,
          password,
        });
        alert('회원가입이 완료되었습니다.');
        navigate(ROUTE.LOGIN.path);
      } catch (error) {
        console.error('Failed to register:', error);
        alert('회원가입에 실패하였습니다.');
      }
    }
  };

  const handleCheckEmail = (e) => {
    e.preventDefault();
    if (emailList.includes(email)) {
      alert('중복된 이메일입니다.');
    } else {
      alert('사용 가능한 이메일입니다.');
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Box style={{ top: '27%' }}>
        <InputBox>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={nameChange}
            placeholder=" Please Enter Your Name"
          />
        </InputBox>
        <InputBox>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={emailChange}
            className="email"
            placeholder=" Please Enter Your Email"
          />
          <CheckBtn onClick={handleCheckEmail}>확인</CheckBtn>
        </InputBox>
        <InputBox>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={passwordChange}
            placeholder=" Please Enter Your Password"
          />
        </InputBox>
        <InputBox>
          <Input
            type="password"
            name="confirmPassword"
            value={password2}
            onChange={password2Change}
            placeholder=" Please Enter Your Password Again"
          />
        </InputBox>
      </Box>
      <SubmitBtn type="submit" onClick={handleSubmit}>
        Submit
      </SubmitBtn>
    </Container>
  );
};
export default Register;
