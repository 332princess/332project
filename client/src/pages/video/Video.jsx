import React, { useState, useEffect } from 'react';
import { Container, WhiteBox, YoutubeWrapper } from '../../styles/video';
import {
  addToLiked,
  addToPlayList,
  likelist,
  playlist,
  removeFromPlayList,
  removeFromLiked,
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
        const song = await videoList();
        const list = await playlist();
        const like = await likelist();
        setVideos(song);
        setPlayList(list);
        setLiked(like);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, [setVideos]);

  const handleVideoClick = (video) => {
    if (currentVideo && currentVideo.id === video.id) {
      setCurrentVideo(null);
    } else {
      setCurrentVideo({ ...video, playing: true });
    }
  };

  const handlePlay = () => {
    setCurrentVideo((prevVideo) => ({ ...prevVideo, playing: true }));
  };

  const handlePause = () => {
    setCurrentVideo((prevVideo) => ({ ...prevVideo, playing: false }));
  };

  const handlePlayList = async (video) => {
    try {
      if (playList.find((item) => item === video.id)) {
        await removeFromPlayList(video.id);
        setPlayList((prevPlayList) =>
          prevPlayList.filter((item) => item !== video.id)
        );
        window.location.href = '/video';
      } else {
        await addToPlayList(video);
        setPlayList((prevPlayList) => [...prevPlayList, video]);
        window.location.href = '/video';
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLike = async (video) => {
    try {
      if (liked.find((item) => item === video.id)) {
        await removeFromLiked(video.id);
        setLiked((prevLiked) => prevLiked.filter((item) => item !== video.id));
        window.location.href = '/video';
      } else {
        await addToLiked(video);
        setLiked((prevLiked) => [...prevLiked, video]);
        window.location.href = '/video';
      }
    } catch (error) {
      console.log(error);
    }
  };

  const opts = {
    height: '315',
    width: '560',
  };

  return (
    <main>
      <Container>
        <WhiteBox className="non_scroll">
          <YoutubeWrapper>
            <CurrentVideo
              currentVideo={currentVideo}
              opts={opts}
              handlePlay={handlePlay}
              handlePause={handlePause}
            />
          </YoutubeWrapper>
        </WhiteBox>
        <WhiteBox className="scroll">
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
      </Container>
    </main>
  );
};
export default Video;
