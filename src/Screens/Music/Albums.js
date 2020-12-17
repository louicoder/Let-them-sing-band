import React from 'react';
import './Styles.scss';

const Albums = ({ albums, setAlbum }) => {
  console.log('albums', albums);
  return (
    <div id="albums-list-main-container">
      <span id="albums-header">Our Albums</span>
      <div id="albums-list-container">
        {albums.map(({ title, tracks, image, description }) => (
          <div id="album-container" onClick={() => setAlbum({ title, tracks, image, description })}>
            <img src={image} />
            <div id="album-info-preview-container">
              <span>
                {title.slice(0, 20)}
                {title.length > 20 && '...'}
              </span>
              <span>{tracks.length} Tracks</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
