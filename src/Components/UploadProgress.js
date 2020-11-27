import React from 'react';
import './styles.scss';

const UploadProgress = ({ styles, progress }) => {
  return (
    <div style={styles}>
      <span>
        Uploading file please wait... <span style={{ fontWeight: '700' }}>[ {progress}% ]</span>
      </span>
      <div id="upload-progress-container">
        <div id="inner-progress-container" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default UploadProgress;
