import React, { useState, useEffect } from 'react';
import { Page, Container } from '../../styles/mypage';
import Side from '../../components/mypage/Side';
import { playlist } from '../../services/mypage/PlayList';
import CurrentPlayList from '../../components/mypage/playlist/CurrentPlatList';
import PlayListComponents from '../../components/mypage/playlist/PlayList';
import { click, remove } from '../../util/videoHandleUtils';
// 서버 연결 시 수정할 코드 주석처리

const PlayList = () => {
  const [video, setVideo] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [deleteList, setDeleteList] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        // const response = await axios.get('http://localhost:8081/song');
        const response = await playlist();
        setVideo(response.data[0]);
        // const videoIds = response.data.map((item) => item.videoId);
        // const youtubeVideo = await apiClient.get('item', {
        //   params: {
        //     part: 'snippet',
        //     videoId: videoIds.join(','),
        //   },
        // });
        // const youtubeVideo = videoList();
        // setCurrentVideo(youtubeVideo.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSongs();
  }, []);

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

  // const handleVideoDelete = async (clickedVideo) => {
  //   try {
  //     await axios.delete('http://localhost:8081/playlists', {
  //       data: [clickedVideo],
  //     });
  //     setVideo((prevVideo) =>
  //       prevVideo.filter((item) => item.id !== clickedVideo.id)
  //     );

  //     if (currentVideo && currentVideo.id === clickedVideo.id) {
  //       setCurrentVideo(null);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const opts = {
    height: '315',
    width: '560',
  };

  return (
    <Page>
      <Side />
      <Container className="list">
        <CurrentPlayList currentVideo={currentVideo} opts={opts} />
        <PlayListComponents
          video={video}
          currentVideo={currentVideo}
          handleVideo={handleVideo}
          deleteVideo={deleteVideo}
        />
      </Container>
    </Page>
  );
};
export default PlayList;
