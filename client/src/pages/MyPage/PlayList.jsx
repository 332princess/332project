import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Video,
  Bar,
  BarBtn,
} from '../../components/mypage/Detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMinus, faPause } from '@fortawesome/free-solid-svg-icons';
import { MyPage } from '../../components/mypage/MyPage';
import Side from './Side';

const user_id = localStorage.getItem('user_id');
const PlayList = () => {
  const [video, setVideo] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [deleteList, setDeleteList] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/${user_id}/playlists`
        );
        setVideo(response.data.rows);
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
      await axios.delete(
        `http://localhost:8081/${user_id}/playlists/${clickedVideo.id}`
      );
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
            <Video>
              {video.title} - {video.singer}
            </Video>
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
