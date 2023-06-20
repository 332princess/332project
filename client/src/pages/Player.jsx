import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
import axios from 'axios';
import {
  Container,
  Box,
  WhiteBox,
  Title,
  VideoDetail,
} from '../components/Video';

const apiClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_API_KEY },
});

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(false);
  // const user_id = localStorage.getItem('user_id');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await apiClient.get('playlistItems', {
          params: {
            part: 'snippet',
            playlistId: 'PLc_2DBEEb9ofX7p4Mq7_z-p5Pta1gBiSH',
            maxResults: 10,
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
