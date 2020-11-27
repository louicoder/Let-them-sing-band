import React from 'react';
import './styles.scss';

const MultiLineInput = ({ placeholder, name, rows = 20, onChange, styles }) => {
  return (
    <textarea
      rows={rows}
      style={styles}
      id="text-area-container"
      placeholder={placeholder}
      onChange={({ target: value }) => onChange(name, value)}
    />
  );
};

export default MultiLineInput;
