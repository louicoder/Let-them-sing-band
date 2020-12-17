import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../Components';
import SVGComp from '../../Components/VectorComp';
import { Icon } from '../../Helper';
import { Storage } from '../../Store/FirebaseConfig';
import Videos from '../Admin/Videos';
import Album from './Album';
import Albums from './Albums';
// import Content from './Content';
import Music from './Music';
import Song from './Song';
import Video from './Video';
import VideoList from './VideoList';

const MusicComp = () => {
  const dispatch = useDispatch();
  const { getSongs, getAlbums, getAllVideos } = useSelector((state) => state.loading.effects.users);
  const { songs, albums, videos } = useSelector((state) => state.users);
  const [ state, setState ] = React.useState({
    _songs: [],
    _albums: [],
    contentComponent: '',
    activeSong: {},
    activeAlbum: {},
    activeVideo: {},
    modal: false
  });

  React.useEffect(() => {
    getAllAlbums();
    getAllSongs();
    getVideos();
  }, []);

  React.useEffect(() => {}, []);

  const getAllSongs = async () => await dispatch.users.getSongs(() => null);

  const getAllAlbums = async () => await dispatch.users.getAlbums(() => null);

  const getVideos = async () => await dispatch.users.getAllVideos(() => null);

  const renderContentComponent = () => {
    switch (state.contentComponent) {
      case 'song':
        return <Song {...state.activeSong} />;
      case 'album':
        return (
          <Album
            {...state.activeAlbum}
            setSong={(activeSong) => setState({ ...state, contentComponent: 'song', activeSong })}
          />
        );
      case 'video':
        return <Video {...state.activeVideo} />;
      default:
        return <NoContent />;
    }
  };

  const NoContent = () => (
    <div style={{ width: '100%', display: 'flex' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: '1.2em' }}>Select a song or album to preview</span>
      </div>
    </div>
  );

  return (
    <div id="main-music-container">
      <Loader visible={getSongs || getAlbums || getAllVideos} />
      {state.modal && (
        <div id="modal-container">
          <div
            style={{ width: '100%', justifyContent: 'flex-end', height: '10%', alignItems: 'center', display: 'flex' }}
          >
            <SVGComp path={Icon.close} onClick={() => setState({ ...state, modal: false })} hover fill="#fff" />
          </div>
          <div style={{ width: '100%', height: '90%', overflowY: 'scroll' }}>{renderContentComponent()}</div>
        </div>
      )}
      {songs && (
        <Music
          songs={songs}
          setSong={(activeSong) => setState({ ...state, contentComponent: 'song', activeSong, modal: true })}
        />
      )}
      {albums && (
        <Albums
          albums={albums}
          setAlbum={(activeAlbum) => setState({ ...state, contentComponent: 'album', activeAlbum, modal: true })}
        />
      )}
      {videos && (
        <VideoList
          videos={videos}
          setVideo={(activeVideo) => setState({ ...state, activeVideo, contentComponent: 'video', modal: true })}
        />
      )}
    </div>
  );
};

export default MusicComp;
