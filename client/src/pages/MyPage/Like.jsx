import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Video,
  Bar,
  BarBtn,
  MoreBtn,
} from '../../components/Detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faHeart,
  faPause,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { MyPage } from '../../components/MyPage';
import Side from './Side';

const Like = () => {
  const [video, setVideo] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(false);

  useEffect(() => {
    const fetchvideo = async () => {
      try {
        const response = await axios.get('http://localhost:8081/likes');
        setVideo(response.data.rows);
      } catch (error) {
        console.log(error);
      }
    };
    fetchvideo();
  }, []);

  const handleVideoClick = (video) => {
    if (currentVideo && currentVideo.id === video.id) {
      setCurrentVideo(null);
    } else {
      setCurrentVideo(video);
    }
  };

  const handleVideoDelete = async (clickedVideo) => {
    try {
      await axios.delete('http://localhost:8081/playlists', {
        data: [clickedVideo],
      });
      setVideo((prevVideo) =>
        prevVideo.filter((item) => item.id !== clickedVideo.id)
      );

      if (currentVideo && currentVideo.id === clickedVideo.id) {
        setCurrentVideo(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyPage>
      <Side />
      <Container>
        {video.map((video) => (
          <Box key={video.id}>
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
                  icon={faHeart}
                  color="#ff6060"
                  onClick={() => handleVideoDelete(video)}
                ></FontAwesomeIcon>
              </BarBtn>
            </Bar>
          </Box>
        ))}
      </Container>
    </MyPage>
  );
};
export default Like;
