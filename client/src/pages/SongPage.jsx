import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
import axios from 'axios';
import {
  Container,
  Box,
  WhiteBox,
  VideoBox,
  Bar,
  VideoContainer,
  PlayBox,
  Lyrics,
  Singer,
  Title,
  VideoDetail,
  BarBtn,
} from '../components/Video';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faPlay,
  faPause,
  faMinus,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const apiClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_API_KEY },
});

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(false);
  const [playList, setPlayList] = useState([]);
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await apiClient.get('playlistItems', {
          params: {
            part: 'snippet',
            playlistId: 'PLc_2DBEEb9ofX7p4Mq7_z-p5Pta1gBiSH',
            maxResults: 5,
          },
        });
        console.log(response.data.items);
        setVideos(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  const handleVideoClick = (Video) => {
    if (currentVideo && currentVideo.id === Video.id) {
      setCurrentVideo(null);
    } else {
      setCurrentVideo({ ...Video, playing: true });
    }
  };

  const handlePlayList = (Video) => {
    const index = playList.findIndex((item) => item.id === Video.id);
    if (index === -1) {
      setPlayList((prevPlayList) => [...prevPlayList, Video]);
    } else {
      setPlayList((prevPlayList) => {
        const updatedPlayList = [...prevPlayList];
        updatedPlayList.splice(index, 1);
        return updatedPlayList;
      });
    }
  };

  const handleLike = (Video) => {
    const index = liked.findIndex((item) => item.id === Video.id);
    if (index === -1) {
      setLiked((prevLiked) => [...prevLiked, Video]);
    } else {
      setLiked((prevLiked) => {
        const updatedLiked = [...prevLiked];
        updatedLiked.splice(index, 1);
        return updatedLiked;
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
    const updateLiked = async () => {
      try {
        await axios.post('/api/likes', liked);
      } catch (error) {
        console.log(error);
      }
    };
    updateLiked();
  }, [liked]);

  const handlePlay = () => {
    setCurrentVideo((prevVideo) => ({ ...prevVideo, playing: true }));
  };

  const handlePause = () => {
    setCurrentVideo((prevVideo) => ({ ...prevVideo, playing: false }));
  };

  const playVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`);
  };

  const opts = {
    height: '315',
    width: '560',
  };

  return (
    <Container>
      <Box>
        <WhiteBox>
          {videos.map((video) => (
            <VideoContainer key={video.id}>
              <VideoBox>{video.snippet.title}</VideoBox>
              <Bar>
                <BarBtn>
                  {currentVideo && currentVideo.id === video.id ? (
                    currentVideo.playing ? (
                      <FontAwesomeIcon
                        icon={faPause}
                        color="#ff6060"
                        onClick={handlePause}
                      />
                    ) : (
                      <FontAwesomeIcon icon={faPlay} onClick={handlePlay} />
                    )
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlay}
                      onClick={() => handleVideoClick(video)}
                    />
                  )}
                </BarBtn>
                <BarBtn>
                  {playList.find((item) => item.id === video.id) ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      color="#ff6060"
                      onClick={() => handlePlayList(video)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => handlePlayList(video)}
                    />
                  )}
                </BarBtn>
                <BarBtn>
                  <FontAwesomeIcon
                    icon={faHeart}
                    color={
                      liked.find((item) => item.id === video.id)
                        ? '#ff6060'
                        : 'white'
                    }
                    onClick={() => handleLike(video)}
                  ></FontAwesomeIcon>
                </BarBtn>
              </Bar>
            </VideoContainer>
          ))}
        </WhiteBox>

        {currentVideo && (
          <WhiteBox>
            <VideoDetail>
              <Title>{currentVideo.snippet.title}</Title>
            </VideoDetail>
            <YouTube
              videoId={currentVideo.snippet.resourceId.videoId}
              opts={opts}
              onPlay={handlePlay}
              onPause={handlePause}
            />
            <Lyrics></Lyrics>
            {currentVideo.playing ? (
              <FontAwesomeIcon
                icon={faPause}
                color="#ff6060"
                onClick={handlePause}
              />
            ) : (
              <FontAwesomeIcon icon={faPlay} onClick={handlePlay} />
            )}
          </WhiteBox>
        )}
      </Box>
    </Container>
  );
};
export default Video;
