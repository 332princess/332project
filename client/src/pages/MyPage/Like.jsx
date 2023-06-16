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
import {
  faPlay,
  faHeart,
  faPause,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { MyPage } from '../../components/MyPage';
import Side from './Side';

const Like = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(false);
  const [likedSongs, setLikedSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        // const response = await axios.get('http://localhost:8081/song');
        const response = await axios.get('/data/like.json');
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
    if (currentSong) {
      const updateCurrentSong = async () => {
        try {
          await axios.post('http://localhost:8081/currentsong', [currentSong]);
        } catch (error) {
          console.log(error);
        }
      };
      updateCurrentSong();
    }
  }, [currentSong]);

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

  return (
    <MyPage>
      <Side />
      <Container>
        {songs.map((song) => (
          <Box key={song.id}>
            <Song>
              {song.title} - {song.singer}
            </Song>
            <Bar>
              <BarBtn>
                {currentSong && currentSong.id === song.id ? (
                  currentSong.playing ? (
                    <FontAwesomeIcon
                      icon={faPause}
                      color="#ff6060"
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
                    onClick={() => handleSongClick(song)}
                  />
                )}
              </BarBtn>
              <BarBtn>
                <FontAwesomeIcon
                  icon={faHeart}
                  color={
                    likedSongs.find((item) => item.id === song.id)
                      ? 'white'
                      : '#ff6060'
                  }
                  onClick={() => handleLike(song)}
                ></FontAwesomeIcon>
              </BarBtn>
            </Bar>
          </Box>
        ))}
      </Container>
    </MyPage>
  );
};
export default Like;
