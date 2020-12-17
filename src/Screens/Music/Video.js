import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ url }) => {
  return (
    <div style={{ height: '90%' }}>
      <ReactPlayer url={url} width="100%" height="700px" />
    </div>
  );
};

export default Video;
