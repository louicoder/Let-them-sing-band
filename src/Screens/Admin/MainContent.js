import React from 'react';
import './styles.scss';

const MainContent = (props) => {
  console.log('Main content', props.match.params.component);
  return (
    <div id="main-content-container">
      <p>this is the main content</p>
    </div>
  );
};

export default MainContent;
