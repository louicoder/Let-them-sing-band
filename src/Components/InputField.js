import React from 'react';
import './styles.scss';

const InputField = ({ value, onChange, styles, title, placeholder }) => {
  return (
    <div className="input-field-container" style={styles}>
      <span>{title}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
