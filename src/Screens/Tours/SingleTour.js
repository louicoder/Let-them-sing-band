import React from 'react';
import SVGComp from '../../Components/VectorComp';
import { Icon } from '../../Helper';
import { returnMonth } from '../../Helper/HelperFunctions';
import './Styles.scss';

const SingleTour = ({ switchPreview, title, description, date }) => {
  console.log('Title', title);
  return (
    <div id="single-tour-container">
      <div id="date-container-extended">
        <span>{date.split('-')[2]}</span>
        <span>{returnMonth(parseInt(date.split('-')[1]))}</span>
        <span>{date.split('-')[0]}</span>
        <span id="close-single-tour">
          <SVGComp path={Icon.close} fill="black" hover onClick={switchPreview} />
        </span>
      </div>
      <div id="single-tour-desc-container">
        <span>
          {title} <SVGComp path={Icon.close} fill="black" hover onClick={switchPreview} />
        </span>
        <span>{description} </span>
      </div>
    </div>
  );
};

export default SingleTour;
