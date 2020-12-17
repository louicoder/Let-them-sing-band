import React from 'react';
import SongComp from './SongComp';
import './Styles.scss';

const Music = ({ songs, setSong }) => {
  console.log('songs reached 1', songs);
  return (
    <div id="music-list-container">
      <span id="music-header">Our Music</span>
      {songs.map((props) => <SongComp setSong={setSong} {...props} />)}
    </div>
  );
};

export default Music;
