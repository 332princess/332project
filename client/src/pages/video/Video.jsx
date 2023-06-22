import React, { useState, useEffect } from 'react';
import { Container, Box, WhiteBox } from '../../styles/video';
import {
  addToLiked,
  addToPlayList,
  updateLiked,
  updatePlayList,
  videoList,
} from '../../services/video/Video';
import VideoList from '../../components/video/VideoList';
import CurrentVideo from '../../components/video/CurrentVideo';

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
          <VideoList
            videos={videos}
            currentVideo={currentVideo}
            playList={playList}
            liked={liked}
            handleVideoClick={handleVideoClick}
            handlePlayList={handlePlayList}
            handleLike={handleLike}
          />
        </WhiteBox>
        <WhiteBox className="non_scroll">
          <CurrentVideo
            currentVideo={currentVideo}
            opts={opts}
            handlePlay={handlePlay}
            handlePause={handlePause}
          />
        </WhiteBox>
      </Box>
    </Container>
  );
};
export default Video;
