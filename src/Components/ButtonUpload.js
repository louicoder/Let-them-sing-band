import React from 'react';
import { Icon } from '../Helper';
import './styles.scss';
import SVGComp from './VectorComp';

const ButtonUpload = ({ acceptedFiles, onChange, styles, type }) => {
  return (
    <div id="button-upload-container" for="file-upload" style={styles}>
      <label for="file-upload">
        Upload {type}
        <SVGComp path={Icon.upload} />
      </label>
      <input accept={acceptedFiles} type="file" style={styles} onChange={onChange} id="file-upload" />
    </div>
  );
};

export default ButtonUpload;
