import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Title,
  Box,
  URLs,
  Logo,
} from '../../components/mypage/SideBar';
import { PRIVATE_ROUTE_ARR } from '../../routes/Route';
import Navbar from '../../components/header/Navbar';

const Side = () => {
  return (
    <Container>
      <Title>마이페이지</Title>
      <Box>
        {PRIVATE_ROUTE_ARR.map((menu, index) => {
          return (
            <div>
              <URLs to={menu.path} key={index}>
                {menu.name}
              </URLs>
            </div>
          );
        })}
        <Logo />
      </Box>
    </Container>
  );
};
export default Side;
