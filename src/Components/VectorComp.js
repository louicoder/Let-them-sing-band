import React from 'react';
import './styles.scss';

const SVGComp = ({ path, fill = 'black', hover = false }) => {
  return (
    <svg
      style={{ width: '24px', height: '24px' }}
      viewBox="0 0 24 24"
      className={`svg-container ${hover ? 'hover-icon' : ''}`}
    >
      <path fill={fill} d={path} />
    </svg>
  );
};

export default SVGComp;
