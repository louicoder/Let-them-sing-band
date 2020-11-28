import React from 'react';
import './styles.scss';

const Button = ({ title, btnStyles, onClick, loading }) => {
  return (
    <button
      component="label"
      variant="text"
      style={btnStyles}
      onClick={onClick}
      disabled={loading}
      id="button-container"
    >
      {loading ? 'Loading, please wait....' : title}
    </button>
  );
};

export default Button;
