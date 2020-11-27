import React from 'react';
import Songs from './Songs';
import './styles.scss';

const MainContent = ({ match: { params: { component } } }) => {
  // console.log('Main content', component);
  const [ state, setState ] = React.useState({ component: '' });

  React.useEffect(
    () => {
      setState({ ...state, component });
    },
    [ component ]
  );

  const renderComponent = () => {
    switch (state.component) {
      case 'songs':
        return <Songs />;
    }
  };

  return <div id="main-content-container">{renderComponent()}</div>;
};

export default MainContent;
