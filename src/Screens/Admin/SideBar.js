import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { VectorComp } from '../../Components';
import { Icon } from '../../Helper';

const SideBar = ({ history }) => {
  // console.log('props in sidebar', props);
  return (
    <div id="side-bar-container">
      {[
        { title: 'songs', to: '', icon: Icon.music },
        { title: 'albums', to: '', icon: Icon.album },
        { title: 'songs', to: '', icon: Icon.music },
        { title: 'team', to: '', icon: Icon.group },
        { title: 'tours', to: '', icon: Icon.calendar }
      ].map(({ title, to, icon }) => (
        <div id="side-bar-menu-container" onClick={() => history.push(`/admin/${title}`)}>
          <div id="side-title-container">
            <VectorComp path={icon} />
            <p>{title}</p>
          </div>
          <VectorComp path={Icon.arrowRight} />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
