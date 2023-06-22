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
          </VideoDetail>
          <YouTube
            videoId={currentVideo.snippet.resourceId.videoId}
            opts={opts}
            onPlay={handlePlay}
            onPause={handlePause}
          />
        </>
      )}
    </>
  );
};

export default CurrentVideo;
