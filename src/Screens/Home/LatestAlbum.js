import React from 'react';
import './Styles.scss';
import Disk from '../../assets/vinyl1.jpg';

const LatestAlbum = () => {
  return (
    <div id="latest-album-container">
      <div id="header-container">
        <p />
      </div>

      {/* info and cover */}
      <div id="latest-alnum-cover-info-container">
        <div id="latest-album-cover-container">
          <img src={Disk} width="100%" height="auto" />
        </div>
        <div id="latest-album-info-container">{/* <p></p> */}</div>
      </div>
    </div>
  );
};

export default LatestAlbum;
