import React from 'react';
import './styles.scss';

const Button = ({ title, fileSelector = false, onChange, btnStyles, onClick, loading, acceptedFiles, selectFile }) => {
  return (
    <button
      component="label"
      variant="text"
      style={btnStyles}
      onClick={onClick}
      disabled={loading}
      id="button-container"
    >
      {/* {loading && <span style={{ fontSize: '20px' }}>Loading...</span>} */}
      {title}
      {/* {fileSelector && (
        <input accept={acceptedFiles} type="file" style={{ display: 'none', flex: 1 }} onChange={selectFile} />
      )} */}
    </button>
  );
};

export default Button;
