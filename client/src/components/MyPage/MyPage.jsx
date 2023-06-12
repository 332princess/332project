import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Title, Box, Find, FindBox, Input } from './style';
import Detail from './Detail/Detail';
import Side from './SideBar/Side';

const MyPage = () => {
  return (
    <Container>
      <Side></Side>
      <Detail></Detail>
    </Container>
  );
};
export default MyPage;
