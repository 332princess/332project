import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Song,
  Bar,
  BarBtn,
  MoreBtn,
} from '../../components/Detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMinus } from '@fortawesome/free-solid-svg-icons';
import { MyPage } from '../../components/MyPage';
import Side from './Side';

const ChatList = () => {
  return (
    <MyPage>
      <Side />
      <Container>
        <Box>
          <Song>사우나 보이 - 이강우</Song>
          <Bar>
            <BarBtn>
              <FontAwesomeIcon icon={faPlay} />
            </BarBtn>
            <BarBtn>
              <FontAwesomeIcon icon={faMinus} />
            </BarBtn>
          </Bar>
        </Box>
        <Box>
          <Song>열심히 배워가는 중 - 윤태영</Song>
          <Bar>
            <BarBtn>
              <FontAwesomeIcon icon={faPlay} />
            </BarBtn>
            <BarBtn>
              <FontAwesomeIcon icon={faMinus} />
            </BarBtn>
          </Bar>
        </Box>
        <Box>
          <Song>이미 죽어 있는 - 김혜지</Song>
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
export default ChatList;
