import React from 'react';
import './styles.scss';

const InputField = ({ name, value, onChange, styles, title }) => {
  return (
    <div className="input-field-container" style={styles}>
      <span>{title}</span>
      <input value={value} onChange={({ target: value }) => onChange(name, value)} />
    </div>
  );
};

export default InputField;
