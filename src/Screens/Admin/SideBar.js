import React from 'react';
import './styles.scss';
import { VectorComp } from '../../Components';
import { Helpers, Icon } from '../../Helper';
import Logo from '../../assets/letthemsingbandlogo.PNG';

const SideBar = ({ history }) => {
  // console.log('props in sidebar', props);
  return (
    <div id="side-bar-container">
      <div
        style={{
          objectFit: 'contain',
          width: '100%',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px'
        }}
      >
        <img src={Logo} style={{ height: 'auto', width: 'auto' }} />
      </div>
      {[
        { title: 'songs', to: '', icon: Icon.music },
        { title: 'albums', to: '', icon: Icon.album },
        // { title: 'songs', to: '', icon: Icon.music },
        { title: 'team', to: '', icon: Icon.group },
        { title: 'tours', to: '', icon: Icon.bus },
        { title: 'reviews', to: '', icon: Icon.reviews },
        { title: 'gallery', to: '', icon: Icon.gallery },
        { title: 'videos', to: '', icon: Icon.youtube }
      ].map(({ title, to, icon }) => (
        <div
          id="side-bar-menu-container"
          onClick={() => history.push(`/admin/${title}`)}
          key={Helpers.randomStringGenerator()}
        >
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
