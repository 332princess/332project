import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Video,
  Bar,
  BarBtn,
  MoreBtn,
} from '../../components/mypage/Detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMinus } from '@fortawesome/free-solid-svg-icons';
import { MyPage } from '../../components/mypage/MyPage';
import Side from './Side';

const ChatList = () => {
  return (
    <MyPage>
      <Side />
      <Container>
        <Box>
          <Video>사우나 보이 - 이강우</Video>
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
          <Video>열심히 배워가는 중 - 윤태영</Video>
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
          <Video>이미 죽어 있는 - 김혜지</Video>
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
