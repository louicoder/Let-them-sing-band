import React from 'react';
import SVGComp from '../../Components/VectorComp';
import { Icon } from '../../Helper';
import './Styles.scss';

const SingleMember = ({ name, role, image, description, setPreview }) => {
  return (
    <div id="team-member-full-details-container">
      <div id="member-details-image-container">
        <img src={image} />
        <span id="close-team-member">
          <SVGComp path={Icon.close} hover fill="#333" onClick={setPreview} />
        </span>
      </div>
      <div id="team-member-details-info-container">
        <span>
          {name} <SVGComp path={Icon.close} hover fill="#333" onClick={setPreview} />
        </span>
        <span>Role: {role}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default SingleMember;
