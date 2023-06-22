import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import {
  Container,
  Box,
  WhiteBox,
  VideoBox,
  Bar,
  VideoContainer,
  Title,
  VideoDetail,
  BarBtn,
} from '../../components/video/Video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faPlay,
  faPause,
  faMinus,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {
  addToLiked,
  addToPlayList,
  updateLiked,
  updatePlayList,
  videoList,
} from '../../services/video/Video';

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(false);
  const [playList, setPlayList] = useState([]);
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await videoList();
        console.log(response);
        setVideos(response);
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

  const handlePlayList = async (video) => {
    const index = playList.findIndex((item) => item.id === video.id);
    if (index === -1) {
      setPlayList((prevPlayList) => [...prevPlayList, video]);
      try {
        await addToPlayList(video);
      } catch (error) {
        console.log(error);
      }
    } else {
      setPlayList((prevPlayList) => {
        const updatedPlayList = [...prevPlayList];
        updatedPlayList.splice(index, 1);
        return updatedPlayList;
      });
    }
  };

  useEffect(() => {
    const updatePlayListVideos = async () => {
      try {
        // await updatePlayList(playList);
      } catch (error) {
        console.log(error);
      }
    };
    updatePlayListVideos();
  }, [playList]);

  const handleLike = async (video) => {
    const index = liked.findIndex((item) => item.id === video.id);
    if (index === -1) {
      setLiked((prevLiked) => [...prevLiked, video]);
      try {
        await addToLiked(video);
      } catch (error) {
        console.log(error);
      }
    } else {
      setLiked((prevLiked) => {
        const updatedLiked = [...prevLiked];
        updatedLiked.splice(index, 1);
        return updatedLiked;
      });
    }
  };

  useEffect(() => {
    const updateLikedVideos = async () => {
      try {
        // await updateLiked(liked);
      } catch (error) {
        console.log(error);
      }
    };
    updateLikedVideos();
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
                  {currentVideo.id === video.id ? (
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
        <WhiteBox className="non_scroll">
          {currentVideo && (
            <>
              <VideoDetail>
                <Title>{currentVideo.snippet.title}</Title>
              </VideoDetail>
              <YouTube
                videoId={currentVideo.snippet.resourceId.videoId}
                opts={opts}
                onPlay={handlePlay}
                onPause={handlePause}
              />
            </>
          )}
        </WhiteBox>
      </Box>
    </Container>
  );
};
export default Video;
