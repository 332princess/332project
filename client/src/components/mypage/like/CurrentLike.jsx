import React from 'react';
import YouTube from 'react-youtube';

const CurrentLike = ({ currentVideo, opts }) => {
  return (
    <>
      {currentVideo ? (
        <YouTube videoId={currentVideo.videoId} opts={opts} />
      ) : (
        <YouTube />
      )}
    </>
  );
};

export default CurrentLike;
