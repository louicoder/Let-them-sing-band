import React from 'react';
import Songs from './Songs';
import Albums from './Albums';
import './styles.scss';

const MainContent = ({ match: { params: { component } }, setProgress, setVisible }) => {
  // console.log('Main content', component);
  const [ state, setState ] = React.useState({ component: '' });
  // const loading = useSelector((state) => state.loading.effects.admin);

  React.useEffect(
    () => {
      setState({ ...state, component });
    },
    [ component ]
  );

  const renderComponent = () => {
    switch (state.component) {
      case 'songs':
        return <Songs setProgress={setProgress} setVisible={setVisible} />;
      case 'albums':
        return <Albums />;
    }
  };

  return <div id="main-content-container">{renderComponent()}</div>;
};

export default MainContent;
