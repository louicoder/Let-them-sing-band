import React from 'react';
import { ButtonUpload, UploadProgress } from '../../../Components';
import './styles.scss';
const ImageAndUpload = ({ progress, image, setImage, obj }) => {
  return (
    <div id="team-members-upload-container">
      {progress > 0 && progress < 100 ? <UploadProgress progress={progress} /> : null}

      <ButtonUpload
        title={image.name ? image.name : 'Select an image to upload'}
        onChange={setImage}
        acceptedFiles=".png,.jpeg,.jpg,.JPG,.PNG,.JPEG"
      />
      <img src={obj} width="100%" style={{ marginTop: '20px' }} />
    </div>
  );
};

export default ImageAndUpload;
