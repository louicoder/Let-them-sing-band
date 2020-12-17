import React from 'react';
import SVGComp from '../../Components/VectorComp';
import { returnMonth } from '../../Helper/HelperFunctions';
import './Styles.scss';

const PreviewTour = ({ tours, setActiveTour }) => {
  return (
    <div id="tours-preview-container">
      {/* <SVGComp onClick={() => null} hover /> */}
      {tours.map(({ title, description, date }) => (
        <div id="preview-tour-container">
          <div className="date-container">
            <span>{date.split('-')[2]}</span>
            <span>{returnMonth(parseInt(date.split('-')[1]))}</span>
            <span>{date.split('-')[0]}</span>
          </div>
          <div id="tour-preview-info-container" style={{ width: '75%', display: 'flex', flexDirection: 'column' }}>
            <span>{title}</span>
            <span>
              {description.slice(0, 200)}
              {description.length > 200 && '...'}
            </span>
            <span onClick={() => setActiveTour({ title, description, date })}>Read more...</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviewTour;
