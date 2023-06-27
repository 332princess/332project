import React, { useState, useEffect } from 'react';
import { Container, WhiteBox, YoutubeWrapper } from '../../styles/video';
import {
  addToLiked,
  addToPlayList,
  likelist,
  playlist,
  removeFromPlayList,
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
        const song = await videoList();
        const list = await playlist();
        const like = await likelist();
        setVideos(song);
        setPlayList(list);
        setLiked(like);
        // console.log(list);
        // console.log(like);
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

  // const playVideo = (videoId) => {
  //   window.open(`https://www.youtube.com/watch?v=${videoId}`);
  // };

  const handlePlayList = async (video) => {
    try {
      if (playList.find((item) => item === video.id)) {
        await removeFromPlayList(video.id);
        setPlayList((prevPlayList) =>
          prevPlayList.filter((item) => item !== video.id)
        );
      } else {
        await addToPlayList(video);
        setPlayList((prevPlayList) => [...prevPlayList, video]);
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
          // handleLike={handleLike}
        />
      </WhiteBox>
    </Container>
  );
};
export default Video;
