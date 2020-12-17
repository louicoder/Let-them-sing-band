import React from 'react';
import SVGComp from '../../Components/VectorComp';
import { Icon } from '../../Helper';

const SingleImage = ({ setInVisible, imageUrl }) => {
  return (
    <div id="gallery-modal-container">
      <div id="modal-close-container">
        <SVGComp path={Icon.close} fill="#fff" hover onClick={setInVisible} />
      </div>
      <div id="modal-image-container">
        <img src={imageUrl} />
      </div>
    </div>
  );
};

export default SingleImage;
