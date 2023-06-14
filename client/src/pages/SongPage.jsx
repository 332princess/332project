import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Box,
  WhiteBox,
  SongBox,
  Bar,
  SongContainer,
  PlayBox,
  Lyrics,
  Singer,
  Title,
  SongDetail,
} from '../components/Song';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';

const Song = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Navbar />
      <Box>
        <WhiteBox>
          <SongContainer>
            <SongBox>노래 제목 - 가수</SongBox>
            <Bar>
              <FontAwesomeIcon icon={faPlay} />
              <FontAwesomeIcon icon={faPlus} />
            </Bar>
          </SongContainer>
          <SongContainer>
            <SongBox>노래 제목 - 가수</SongBox>
            <Bar>
              <FontAwesomeIcon icon={faPlay} />
              <FontAwesomeIcon icon={faPlus} />
            </Bar>
          </SongContainer>
          <SongContainer>
            <SongBox>노래 제목 - 가수</SongBox>
            <Bar>
              <FontAwesomeIcon icon={faPlay} />
              <FontAwesomeIcon icon={faPlus} />
            </Bar>
          </SongContainer>
        </WhiteBox>
        <WhiteBox>
          <SongDetail>
            <Title>눈물나는점심</Title>
            <Singer>이강우</Singer>
          </SongDetail>
          <Lyrics>점심을 먹었는데 눈물이 나</Lyrics>
          <PlayBox></PlayBox>
        </WhiteBox>
      </Box>
    </Container>
  );
};
export default Song;
