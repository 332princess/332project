import React from 'react';
import YouTube from 'react-youtube';
import { VideoDetail, Title } from '../../styles/video';

const CurrentVideo = ({ currentVideo, opts, handlePlay, handlePause }) => {
  return (
    <>
      {currentVideo && (
        <>
          <VideoDetail>
            <Title>{currentVideo.snippet.title}</Title>
            <YouTube
              videoId={currentVideo.id}
              opts={opts}
              onPlay={handlePlay}
              onPause={handlePause}
            />
          </VideoDetail>
        </>
      )}
    </>
  );
};

export default CurrentVideo;
