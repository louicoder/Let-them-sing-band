import React from 'react';

const Loader = ({ visible, progress }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.85)',
        zIndex: 23,
        display: visible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        top: '0px'
      }}
    >
      {progress && (
        <span style={{ color: 'rgba(255,255,255,1)', fontSize: '50px', fontWeight: '700' }}>{progress}%</span>
      )}
      <span style={{ color: 'rgba(255,255,255,1)' }}>Loading please wait...</span>
    </div>
  );
};

export default Loader;
