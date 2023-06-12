import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Text, MoreBtn, Input, Modi } from '../style';

const Info = () => {
  return (
    <Container>
      <Box>
        <Text>아이디 변경</Text>
        <Input placeholder="please" />
        <Modi>수정</Modi>
      </Box>
      <Box>
        <Text>아이디 변경</Text>
        <Input placeholder="please" />
        <Modi>수정</Modi>
      </Box>
      <Box>
        <Text>아이디 변경</Text>
        <Input placeholder="please" />
        <Modi>수정</Modi>
      </Box>
      <MoreBtn>More</MoreBtn>
    </Container>
  );
};
export default Info;
