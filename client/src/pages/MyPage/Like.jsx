import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Song, Bar, MoreBtn } from '../../components/Detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faHeart } from '@fortawesome/free-solid-svg-icons';
import { MyPage } from '../../components/MyPage';
import Side from './Side';

const Like = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(false);
  const [playList, setPlayList] = useState([]);
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('/data/song.json');
        setSongs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSongs();
  }, []);
  const handleSongClick = (song) => {
    if (currentSong && currentSong.id === song.id) {
      setCurrentSong(null);
    } else {
      setCurrentSong(song);
    }
  };
  const handlePlayList = (song) => {
    const index = playList.findIndex((item) => item.id === song.id);
    if (index === -1) {
      const updatedPlayList = [...playList, song];
      setPlayList(updatedPlayList);
      updatePlayList(updatedPlayList);
    } else {
      const updatedPlayList = [...playList];
      updatedPlayList.splice(index, 1);
      setPlayList(updatedPlayList);
      updatePlayList(updatedPlayList);
    }
  };
  const updatePlayList = async (updatedPlayList) => {
    try {
      await axios.post('/data/playlist.json', updatedPlayList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (currentSong) {
      const updateCurrentSong = async () => {
        try {
          await axios.post('/data/currentsong.json', [currentSong]);
        } catch (error) {
          console.log(error);
        }
      };
      updateCurrentSong();
    }
  }, [currentSong]);
  useEffect(() => {
    updatePlayList(playList);
  }, [playList]);

  return (
    <MyPage>
      <Side />
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
    </MyPage>
  );
};
export default Like;
