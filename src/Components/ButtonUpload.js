import React from 'react';
import { Icon } from '../Helper';
import './styles.scss';
import SVGComp from './VectorComp';

const ButtonUpload = ({ acceptedFiles, onChange, styles, file, title }) => {
  // console.log('fle', file);
  return (
    <div id="button-upload-container" for="file-upload" style={styles}>
      <label for="file-upload">
        {file && file.name ? file.name : `${title || 'Click to upload file'}`}
        <SVGComp path={Icon.upload} />
      </label>
      <input
        value={file}
        accept={acceptedFiles}
        type="file"
        style={styles}
        onChange={(e) => e.target.files[0] && onChange(e.target.files[0], URL.createObjectURL(e.target.files[0]))}
        id="file-upload"
      />
    </div>
  );
};

export default ButtonUpload;
