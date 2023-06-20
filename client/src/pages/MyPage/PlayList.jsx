import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Video, Bar, BarBtn } from '../../components/Detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMinus, faPause } from '@fortawesome/free-solid-svg-icons';
import { MyPage } from '../../components/MyPage';
import Side from './Side';

const apiClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_API_KEY },
});

const PlayList = () => {
  const [video, setVideo] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [deleteList, setDeleteList] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/playlists');
        setVideo(response.data.rows);
        if (response.data.rows.length > 0) {
          const videoIds = response.data.rows.map((video) => video.videoId);
          const videoParams = {
            part: 'snippet',
            id: videoIds.join(','),
          };
          const videoResponse = await apiClient.get('videos', {
            params: videoParams,
          });
          console.log(videoResponse.data.items);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideo();
  }, []);

  const handleVideoClick = (video) => {
    if (currentVideo && currentVideo.id === video.id) {
      setCurrentVideo({ ...currentVideo, playing: !currentVideo.playing });
      setModalOpen(!currentVideo.playing);
    } else {
      setCurrentVideo(video);
      setModalOpen(true);
    }
  };

  const handleVideoDelete = async (clickedVideo) => {
    try {
      await axios.delete(`http://localhost:8081/playlists/${clickedVideo.id}`);
      setVideo((prevVideo) =>
        prevVideo.filter((item) => item.id !== clickedVideo.id)
      );
      const newList = deleteList.filter((v) => v.id !== clickedVideo);
      setDeleteList(newList);

      if (currentVideo && currentVideo.id === clickedVideo.id) {
        setCurrentVideo(null);
        setModalOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <MyPage>
      <Side />
      <Container>
        {video.map((video) => (
          <Box
            key={video.id}
            style={{
              display:
                currentVideo && currentVideo.id === video.id ? 'none' : 'flex',
            }}
          >
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
      </Container>
    </MyPage>
  );
};
export default PlayList;
