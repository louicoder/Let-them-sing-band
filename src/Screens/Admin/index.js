import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../../Components';
import MainContent from './MainContent';
import SideBar from './SideBar';
import './styles.scss';

const Admin = (props) => {
  const [ state, setState ] = React.useState({ visible: false, progress: 0 });
  const {
    getAllSongs,
    updateSong,
    addSong,
    registerAlbum,
    updateAlbum,
    registerTeamMember,
    updateTeamMember,
    createTour,
    addToGallery,
    saveVideo,
    getReviews
  } = useSelector((state) => state.loading.effects.admin);
  return (
    <div id="main-admin-container">
      <Loader
        visible={
          getAllSongs ||
          updateSong ||
          addSong ||
          registerAlbum ||
          updateAlbum ||
          registerTeamMember ||
          updateTeamMember ||
          createTour ||
          addToGallery ||
          saveVideo ||
          getReviews
        }
        progress={state.progress}
      />
      <SideBar {...props} />
      <MainContent
        {...props}
        setProgress={(progress) => setState({ ...state, progress })}
        setVisible={(visible) => setState({ ...state, visible })}
      />
    </div>
  );
};

export default Admin;
