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
  BarBtn,
} from '../components/Song';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faPlay,
  faPause,
  faMinus,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const Song = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(false);
  const [playList, setPlayList] = useState([]);
  const [heart, setHeart] = useState('');

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
      setPlayList([...playList, song]);
    } else {
      const updatedPlayList = [...playList];
      updatedPlayList.splice(index, 1);
      setPlayList(updatedPlayList);
    }
  };
  const clickHeart = () => {
    if (heart === 'pink') {
      setHeart('red');
    } else {
      setHeart('white');
    }
  };

  return (
    <Container>
      <Box>
        <WhiteBox>
          {songs.map((song) => (
            <SongContainer key={song.id}>
              <SongBox>
                {song.title} - {song.singer}
              </SongBox>
              <Bar>
                <BarBtn>
                  {currentSong && currentSong.id === song.id ? (
                    <FontAwesomeIcon
                      icon={faPause}
                      onClick={() => handleSongClick(song)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlay}
                      onClick={() => handleSongClick(song)}
                    />
                  )}
                </BarBtn>
                <BarBtn>
                  {playList.find((item) => item.id === song.id) ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => handlePlayList(song)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => handlePlayList(song)}
                    />
                  )}
                </BarBtn>
                <BarBtn>
                  <FontAwesomeIcon
                    icon={faHeart}
                    color={heart}
                    onClick={clickHeart}
                  ></FontAwesomeIcon>
                </BarBtn>
              </Bar>
            </SongContainer>
          ))}
        </WhiteBox>

        {currentSong && (
          <WhiteBox>
            <SongDetail>
              <Title>{currentSong.title}</Title>
              <Singer>{currentSong.singer}</Singer>
            </SongDetail>
            <Lyrics>{currentSong.lyrics}</Lyrics>

            <PlayBox></PlayBox>
          </WhiteBox>
        )}
      </Box>
    </Container>
  );
};
export default Song;
