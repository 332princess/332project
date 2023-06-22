import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import {
  Container,
  Box,
  Video,
  Bar,
  BarBtn,
  MoreBtn,
} from '../../components/mypage/Detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faHeart,
  faPause,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { MyPage } from '../../components/mypage/MyPage';
import Side from './Side';

const apiClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_API_KEY },
});

const Like = () => {
  const [video, setVideo] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(false);
  const [deleteList, setDeleteList] = useState([]);

  useEffect(() => {
    const fetchvideo = async () => {
      try {
        const response = await axios.get('/data/like.json');
        setVideo(response.data);
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
    fetchvideo();
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
                    icon={faHeart}
                    color="#ff6060"
                    onClick={() => handleVideoDelete(video)}
                  ></FontAwesomeIcon>
                </BarBtn>
              </Bar>
            </Box>
          ))}
        </BigBox>
      </Container>
    </MyPage>
  );
};
export default Like;
