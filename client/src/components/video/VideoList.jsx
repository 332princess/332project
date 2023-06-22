import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faPlay,
  faPause,
  faMinus,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { VideoContainer, VideoBox, Bar, BarBtn } from '../../styles/video';

const VideoList = ({
  videos,
  currentVideo,
  handlePause,
  handlePlay,
  playList,
  liked,
  handleVideoClick,
  handlePlayList,
  handleLike,
}) => {
  return (
    <>
      {videos.map((video) => (
        <VideoContainer key={video.id}>
          <VideoBox>{video.snippet.title}</VideoBox>
          <Bar>
            <BarBtn>
              {currentVideo && currentVideo.id === video.id ? (
                currentVideo.playing ? (
                  <FontAwesomeIcon
                    icon={faPause}
                    color="#ff6060"
                    onClick={() => handlePause()}
                  />
                ) : (
                  <FontAwesomeIcon icon={faPlay} onClick={() => handlePlay()} />
                )
              ) : (
                <FontAwesomeIcon
                  icon={faPlay}
                  onClick={() => handleVideoClick(video)}
                />
              )}
            </BarBtn>
            <BarBtn>
              {playList.find((item) => item.id === video.id) ? (
                <FontAwesomeIcon
                  icon={faMinus}
                  color="#ff6060"
                  onClick={() => handlePlayList(video)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => handlePlayList(video)}
                />
              )}
            </BarBtn>
            <BarBtn>
              <FontAwesomeIcon
                icon={faHeart}
                color={
                  liked.find((item) => item.id === video.id)
                    ? '#ff6060'
                    : 'white'
                }
                onClick={() => handleLike(video)}
              />
            </BarBtn>
          </Bar>
        </VideoContainer>
      ))}
    </>
  );
};

export default VideoList;
