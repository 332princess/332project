import React from 'react';
import { Bar, BarBtn, BigBox, Box, Video } from '../../../styles/mypage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const LikeComponent = ({ video, currentVideo, handleVideo, deleteVideo }) => {
  return (
    <BigBox>
      {video.map((video) => (
        <Box key={video.id}>
          <Video>{video.title}</Video>
          <Bar>
            <BarBtn>
              {currentVideo && currentVideo.id === video.id ? (
                <FontAwesomeIcon
                  icon={faPause}
                  color="#ff6060"
                  onClick={() => handleVideo(video)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPlay}
                  onClick={() => handleVideo(video)}
                />
              )}
            </BarBtn>
            <BarBtn>
              <FontAwesomeIcon
                icon={faHeart}
                color="#ff6060"
                onClick={() => deleteVideo(video)}
              ></FontAwesomeIcon>
            </BarBtn>
          </Bar>
        </Box>
      ))}
    </BigBox>
  );
};

export default LikeComponent;
