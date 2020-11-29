import React from 'react';
import Songs from './Songs';
import Albums from './Albums';
import './styles.scss';
import TeamMembers from './Team';
import Tours from './Tours';

const MainContent = ({ match: { params: { component } }, setProgress, setVisible }) => {
  // console.log('Main content', component);
  const [ state, setState ] = React.useState({ component: 'songs' });
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
      case 'team':
        return <TeamMembers />;
      case 'tours':
        return <Tours />;
    }
  };

  return <div id="main-content-container">{renderComponent()}</div>;
};

export default MainContent;
