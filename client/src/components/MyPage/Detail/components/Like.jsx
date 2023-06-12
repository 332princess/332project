import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Song, Bar, MoreBtn } from '../style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faHeart } from '@fortawesome/free-solid-svg-icons';
const Like = () => {
  return (
    <Container>
      <Box>
        <Song>노래 제목 - 가수</Song>
        <Bar>
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faHeart} />
        </Bar>
      </Box>
      <MoreBtn>More</MoreBtn>
    </Container>
  );
};
export default Like;
