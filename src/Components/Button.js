import React from 'react';
import './styles.scss';

const Button = ({ title, btnStyles, onClick, loading, onMouseEnter, onMouseLeave, hover }) => {
  return (
    <button
      id="default-button"
      component="label"
      variant="text"
      style={btnStyles}
      onClick={onClick}
      disabled={loading}
      id="button-container"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={hover && 'hovered-button'}
    >
      {loading ? 'Loading, please wait....' : title}
    </button>
  );
};

export default Button;
