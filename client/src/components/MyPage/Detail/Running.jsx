import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Song, Bar, BarBtn, MoreBtn } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMinus } from '@fortawesome/free-solid-svg-icons';
import { MyPage } from '../style';
import Side from '../SideBar/Side';

const Running = () => {
  return (
    <MyPage>
      <Side />
      <Container>
        <Box>
          <Song>0610 - 이강우 달리기 (10000 걸음)</Song>
          <Bar>
            <BarBtn>
              <FontAwesomeIcon icon={faPlay} />
            </BarBtn>
            <BarBtn>
              <FontAwesomeIcon icon={faMinus} />
            </BarBtn>
          </Bar>
        </Box>
        <MoreBtn>More</MoreBtn>
      </Container>
    </MyPage>
  );
};
export default Running;
