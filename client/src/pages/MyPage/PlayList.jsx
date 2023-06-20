import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import {
  Container,
  Box,
  Video,
  Bar,
  BarBtn,
  BigBox,
} from '../../components/Detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMinus, faPause } from '@fortawesome/free-solid-svg-icons';
import { MyPage } from '../../components/MyPage';
import Side from './Side';
// 서버 연결 시 수정할 코드 주석처리

const apiClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_API_KEY },
});

const PlayList = () => {
  const [video, setVideo] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [deleteList, setDeleteList] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        // const response = await axios.get('http://localhost:8081/song');
        const response = await axios.get('/data/playlist.json');
        setVideo(response.data);
        // const videoIds = response.data.map((item) => item.videoId);
        // const youtubeVideo = await apiClient.get('videos', {
        //   params: {
        //     part: 'snippet',
        //     videoId: videoIds.join(','),
        //   },
        // });
        const videoIds = response.data.map((item) => item.videoId);
        const youtubeVideo = await apiClient.get('videos', {
          params: {
            part: 'snippet',
            id: videoIds,
          },
        });
        setCurrentVideo(youtubeVideo.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSongs();
  }, []);

  const handleVideoClick = (video) => {
    if (currentVideo && currentVideo.id === video.id) {
      setCurrentVideo({ ...currentVideo, playing: !currentVideo.playing });
    } else {
      setCurrentVideo(video);
    }
  };

  const handleVideoDelete = (clickedVideo) => {
    const newList = deleteList.concat(clickedVideo.id);
    setDeleteList(newList);
    setVideo(video.filter((item) => item.id !== clickedVideo.id));

    if (currentVideo && currentVideo.id === clickedVideo.id) {
      setCurrentVideo(null);
    }
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

  return (
    <MyPage>
      <Side />
      <Container className="list">
        {currentVideo ? (
          <YouTube videoId={currentVideo.videoId} />
        ) : (
          <YouTube />
        )}
        <BigBox>
          {video.map((video) => (
            <Box key={video.id}>
              <Video>{video.title}</Video>
              <Bar>
                <BarBtn>
                  {currentVideo && currentVideo.id === video.id ? (
                    currentVideo.playing ? (
                      <FontAwesomeIcon
                        icon={faPause}
                        color="#ff6060"
                        onClick={() =>
                          setCurrentVideo({ ...currentVideo, playing: false })
                        }
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faPlay}
                        onClick={() =>
                          setCurrentVideo({ ...currentVideo, playing: true })
                        }
                      />
                    )
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlay}
                      onClick={() => handleVideoClick(video)}
                    />
                  )}
                </BarBtn>
                <BarBtn>
                  <FontAwesomeIcon
                    icon={faMinus}
                    color="#ff6060"
                    onClick={() => handleVideoDelete(video)}
                  />
                </BarBtn>
              </Bar>
            </Box>
          ))}
        </BigBox>
      </Container>
    </MyPage>
  );
};
export default PlayList;
