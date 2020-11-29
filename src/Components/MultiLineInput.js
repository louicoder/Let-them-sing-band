import React from 'react';
import './styles.scss';

const MultiLineInput = ({ placeholder, name, rows = 10, onChange, styles, title, value }) => {
  return (
    <div id="text-area-container">
      {/* <p>{title}</p> */}
      <textarea
        rows={rows}
        style={styles}
        id="text-area-container"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default MultiLineInput;
