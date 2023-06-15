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
  const [likedSongs, setLikedSongs] = useState([]);

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
      setCurrentSong({ ...song, playing: true });
    }
  };

  useEffect(() => {
    const updateCurrentSong = async () => {
      try {
        if (currentSong) {
          await axios.post('/api/current', currentSong);
        } else {
          await axios.post('/api/current', null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    updateCurrentSong();
  }, [currentSong]);

  const handlePlayList = (song) => {
    const index = playList.findIndex((item) => item.id === song.id);
    if (index === -1) {
      setPlayList((prevPlayList) => [...prevPlayList, song]);
    } else {
      setPlayList((prevPlayList) => {
        const updatedPlayList = [...prevPlayList];
        updatedPlayList.splice(index, 1);
        return updatedPlayList;
      });
    }
  };

  const handleLike = (song) => {
    const index = likedSongs.findIndex((item) => item.id === song.id);
    if (index === -1) {
      setLikedSongs((prevLikedSongs) => [...prevLikedSongs, song]);
    } else {
      setLikedSongs((prevLikedSongs) => {
        const updatedLikedSongs = [...prevLikedSongs];
        updatedLikedSongs.splice(index, 1);
        return updatedLikedSongs;
      });
    }
  };
  useEffect(() => {
    const updatePlayList = async () => {
      try {
        await axios.post('/api/playlist', playList);
      } catch (error) {
        console.log(error);
      }
    };
    updatePlayList();
  }, [playList]);

  useEffect(() => {
    const updateLikedSongs = async () => {
      try {
        await axios.post('/api/likes', likedSongs);
      } catch (error) {
        console.log(error);
      }
    };
    updateLikedSongs();
  }, [likedSongs]);
  // useEffect(() => {
  //   const updateCurrentSong = async () => {
  //     if (currentSong) {
  //       try {
  //         await axios.post('/api/current', currentSong);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     } else {
  //       try {
  //         await axios.post('/api/current', null);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   };
  //   updateCurrentSong();
  // }, [currentSong]);

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
                    currentSong.playing ? (
                      <FontAwesomeIcon
                        icon={faPause}
                        onClick={() =>
                          setCurrentSong({ ...currentSong, playing: false })
                        }
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faPlay}
                        onClick={() =>
                          setCurrentSong({ ...currentSong, playing: true })
                        }
                      />
                    )
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlay}
                      onClick={() => setCurrentSong({ ...song, playing: true })}
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
                    color={
                      likedSongs.find((item) => item.id === song.id)
                        ? 'red'
                        : 'white'
                    }
                    onClick={() => handleLike(song)}
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
