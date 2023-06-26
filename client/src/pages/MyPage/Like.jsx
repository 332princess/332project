import React, { useState, useEffect } from 'react';
import { Page, Container } from '../../styles/mypage';
import Side from '../../components/mypage/Side';
import LikeComponent from '../../components/mypage/like/Like';
import CurrentLike from '../../components/mypage/like/CurrentLike';
import { like } from '../../services/mypage/Like';
import { click, remove } from '../../util/videoHandleUtils';

const Like = () => {
  const [video, setVideo] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(false);
  const [deleteList, setDeleteList] = useState([]);

  useEffect(() => {
    const fetchvideo = async () => {
      try {
        const response = await like();
        setVideo(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchvideo();
  }, []);

  // const handleVideoClick = (video) => {
  //   if (currentVideo && currentVideo.id === video.id) {
  //     setCurrentVideo({ ...currentVideo, playing: !currentVideo.playing });
  //   } else {
  //     setCurrentVideo(video);
  //   }
  // };

  // const handleVideoDelete = (clickedVideo) => {
  //   const newList = deleteList.concat(clickedVideo.id);
  //   setDeleteList(newList);
  //   setVideo(video.filter((item) => item.id !== clickedVideo.id));

  //   if (currentVideo && currentVideo.id === clickedVideo.id) {
  //     setCurrentVideo(null);
  //   }
  // };
  const handleVideo = (clickedVideo) =>
    click(currentVideo, video, clickedVideo, setCurrentVideo);
  const deleteVideo = (clickedVideo) => {
    remove(
      clickedVideo,
      deleteList,
      setDeleteList,
      video,
      setVideo,
      currentVideo,
      setCurrentVideo
    );
  };

  const opts = {
    height: '315',
    width: '560',
  };

  return (
    <Page>
      <Side />
      <Container className="list">
        <CurrentLike currentVideo={currentVideo} opts={opts} />
        <LikeComponent
          video={video}
          currentVideo={currentVideo}
          handleVideo={handleVideo}
          deleteVideo={deleteVideo}
        />
      </Container>
    </Page>
  );
};
export default Like;
