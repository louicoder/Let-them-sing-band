import React from 'react';
import './styles.scss';

const DateField = ({ title, onChange, value, placeholder = 'Enter date e.g DD/MM/YYYY' }) => {
  return (
    <div id="date-container">
      <span>{title}</span>
      <input
        type="date"
        onChange={(e) => onChange(e.target.value)}
        // format="DD/MM/YYYY"
        value={value}
        placeholder={placeholder}
        // dateFormat="DD/MM/YYYY"
        data-date-format="DD/MM/YYYY"
      />
    </div>
  );
};

export default DateField;
