import React from 'react';
import { useSelector } from 'react-redux';
import SVGComp from '../../Components/VectorComp';
import { Icon } from '../../Helper';
import { randomStringGenerator } from '../../Helper/HelperFunctions';
import './Styles.scss';

const VideoList = ({ videos, setVideo }) => {
  // const { videos } = useSelector((state) => state.users);
  return (
    <div id="videos-container">
      <span id="videos-header">Our Videos</span>
      <div style={{ marginTop: '20px' }}>
        {videos.map(({ title, url }) => (
          <div id="single-video-container" key={randomStringGenerator()} onClick={() => setVideo({ title, url })}>
            <SVGComp path={Icon.youtube} fill="#ff0000" />
            <span>{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
