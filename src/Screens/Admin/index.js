import React from 'react';
import { Loader } from '../../Components';
import MainContent from './MainContent';
import SideBar from './SideBar';
import './styles.scss';

const Admin = (props) => {
  const [ state, setState ] = React.useState({ visible: true });
  return (
    <div id="main-admin-container">
      <Loader visible={state.visible} />
      <SideBar {...props} />
      <MainContent {...props} />
    </div>
  );
};

export default Admin;
