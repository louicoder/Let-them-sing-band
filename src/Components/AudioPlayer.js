import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = ({ file }) => {
  return (
    <div>
      <ReactAudioPlayer autoPlay controls src={file} style={{ outline: 'none' }} />
    </div>
  );
};

export default AudioPlayer;
