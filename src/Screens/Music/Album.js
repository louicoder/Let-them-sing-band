import React from 'react';
import SongComp from './SongComp';
import './Styles.scss';

const Album = ({ title, description, releaseDate, image, tracks, setSong }) => {
  return (
    <div id="single-album-container">
      <span className="alb-span">{title} </span>
      <span className="alb-span">{releaseDate}</span>
      <img src={image} />
      <span className="alb-span" style={{ fontWeight: '600', marginBottom: '10px', fontSize: '25px' }}>
        Songs on this album
      </span>
      <div>{tracks.map((track) => <SongComp {...track} setSong={() => setSong({ ...track, autoPlay: true })} />)}</div>
      <span className="alb-span" style={{ fontWeight: '600', marginBottom: '10px', fontSize: '25px' }}>
        Album description.
      </span>
      <span style={{ fontSize: '18px', color: '#fff' }}>{description}</span>
    </div>
  );
};

export default Album;
