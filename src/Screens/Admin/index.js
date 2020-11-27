import React from 'react';
import MainContent from './MainContent';
import SideBar from './SideBar';
import './styles.scss';

const Admin = (props) => {
  return (
    <div id="main-admin-container">
      <SideBar {...props} />
      <MainContent {...props} />
    </div>
  );
};

export default Admin;
