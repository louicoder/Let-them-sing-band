import React from 'react';
import { Icon } from '../../Helper';
import SVGComp from '../../Components/VectorComp';
import './Styles.scss';

const SongComp = ({ title, setSong, ...rest }) => {
  return (
    <div id="music-preview-container" onClick={() => setSong({ title, autoPlay: false, ...rest })}>
      <div id="music-preview-play" style={{ display: 'flex', alignItems: 'center' }}>
        <SVGComp path={Icon.play} />
        <span>
          {title.slice(0, 20)}
          {title.length > 20 && '...'}
        </span>
      </div>
      <span id="listen" onClick={() => setSong({ title, autoPlay: true, ...rest })}>
        Listen
      </span>
    </div>
  );
};

export default SongComp;
