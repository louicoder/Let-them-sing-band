import React from 'react';
import { withRouter } from 'react-router-dom';
import { Header } from '../Components';

const Hoc = ({ component: Component, path, ...rest }) => {
  console.log('hoc', rest);
  return [ '/admin' ].includes(path) ? (
    <Component {...rest} />
  ) : (
    <React.Fragment>
      <Header {...rest} />
      <Component {...rest} />
    </React.Fragment>
  );
};

export default withRouter(Hoc);
