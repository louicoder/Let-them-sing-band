import React from 'react';
import './styles.scss';

const SVGComp = ({ path, fill = 'black', hover = false, styles }) => {
  return (
    <svg style={styles} viewBox="0 0 24 24" className={`svg-container ${hover ? 'hover-icon' : ''}`}>
      <path fill={fill} d={path} />
    </svg>
  );
};

export default SVGComp;
