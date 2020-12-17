import React from 'react';
import Button from './Button';

const ErrorPage = ({ error = 'Something is wrong, click the button below to try agaaom', retry }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {error}
      <Button title="Try again" />
    </div>
  );
};

export default ErrorPage;
