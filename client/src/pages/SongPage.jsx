import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
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
} from '../components/Video';
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

  // 유튭 불러오기
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

  // 비디오 열기 버튼
  const handleVideoClick = (video) => {
    if (currentVideo && currentVideo.id === video.id) {
      setCurrentVideo(null);
    } else {
      setCurrentVideo({ ...video, playing: true });
    }
  };

  // 플레이, 멈추기
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
  // 플레이리스트 추가/제거
  const handlePlayList = async (video) => {
    try {
      const videoId = video.snippet.resourceId.videoId;
      if (playList.find((item) => item.id === video.id)) {
        setPlayList((prevList) =>
          prevList.filter((item) => item.id !== video.id)
        );
        await axios.delete(`http://localhost:8081/api/playlists/${videoId}`);
      } else {
        setPlayList((prevList) => [...prevList, video]);
        await axios.post('http://localhost:8081/api/playlists', { videoId });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLike = async (video) => {
    try {
      const videoId = video.snippet.resourceId.videoId;
      if (liked.find((item) => item.id === video.id)) {
        setLiked((prevList) => prevList.filter((item) => item.id !== video.id));
        await axios.delete(`http://localhost:8081/api/playlists/${videoId}`);
      } else {
        setLiked((prevList) => [...prevList, video]);
        await axios.post('http://localhost:8081/api/playlists', { videoId });
      }
    } catch (error) {
      console.log(error);
    }
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
