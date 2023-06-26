import React from 'react';
import { Bar, BarBtn, BigBox, Box, Video } from '../../../styles/mypage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const PlayListComponents = ({
  video,
  currentVideo,
  handleVideo,
  deleteVideo,
}) => {
  return (
    <BigBox>
      {video.map((item) => (
        <Box key={item.id}>
          <Video>{item.title}</Video>
          <Bar>
            <BarBtn>
              {currentVideo && currentVideo.id === item.id ? (
                <FontAwesomeIcon
                  icon={faPause}
                  color="#ff6060"
                  onClick={() => handleVideo(item)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPlay}
                  onClick={() => handleVideo(item)}
                />
              )}
            </BarBtn>
            <BarBtn>
              <FontAwesomeIcon
                icon={faMinus}
                color="#ff6060"
                onClick={() => deleteVideo(item)}
              />
            </BarBtn>
          </Bar>
        </Box>
      ))}
    </BigBox>
  );
};

export default PlayListComponents;
