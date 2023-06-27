import React from 'react';
import YouTube from 'react-youtube';

const CurrentLike = ({ currentVideo, opts }) => {
  return (
    <>
      {currentVideo ? (
        <YouTube videoId={currentVideo.id} opts={opts} />
      ) : (
        <YouTube />
      )}
    </>
  );
};

export default CurrentLike;
