import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Title, Box, URLs, Logo } from '../../components/SideBar';
import { PRIVATE_ROUTE_ARR } from '../../Route';
import Navbar from '../Navbar';

const Side = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Title>마이페이지</Title>
      <Box>
        {PRIVATE_ROUTE_ARR.map((menu, index) => {
          return (
            <Link to={menu.path} key={index}>
              <URLs>{menu.name}</URLs>
            </Link>
          );
        })}
        {/* <Link to={'like'}>좋아요</Link>
        <Link to={'/playlist'}>플레이리스트</Link>
        <Link to={'/runnig'}>내가 달린 거리</Link>
        <Link to={'/info'}>내 정보 수정</Link> */}
        <Logo />
      </Box>
    </Container>
  );
};
export default Side;
