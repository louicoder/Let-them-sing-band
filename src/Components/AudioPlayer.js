import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = ({ file, autoPlay = true, extStyles }) => {
  return (
    <div>
      <ReactAudioPlayer autoPlay={autoPlay} controls src={file} style={Object.assign({ outline: 'none' }, extStyles)} />
    </div>
  );
};

export default AudioPlayer;
