import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Song, Bar, MoreBtn } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMinus } from '@fortawesome/free-solid-svg-icons';
import { MyPage } from '../style';
import Side from '../SideBar/Side';

const PlayList = () => {
  return (
    <MyPage>
      <Side />
      <Container>
        <Box>
          <Song>노래 제목 - 가수</Song>
          <Bar>
            <FontAwesomeIcon icon={faPlay} />
            <FontAwesomeIcon icon={faMinus} />
          </Bar>
        </Box>
        <MoreBtn>More</MoreBtn>
      </Container>
    </MyPage>
  );
};
export default PlayList;
