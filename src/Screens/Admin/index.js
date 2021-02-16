import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../../Components';
// import auth from 'firebase/auth'
import MainContent from './MainContent';
import SideBar from './SideBar';
import './styles.scss';
import { Auth } from '../../Store/FirebaseConfig';

const Admin = (props) => {
  const [ state, setState ] = React.useState({
    visible: false,
    progress: 0,
    authenticated: false,
    email: '',
    password: '',
    loading: false
  });
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

  React.useEffect(() => {
    if (Auth.currentUser) setState({ ...state, authenticated: true });
    // console.log('AUTH:::', Auth.currentUser ? 'yes' : 'no');
    // signInwithEmail();
  }, []);

  const signInwithEmail = () => {
    setState({ ...state, loading: true });
    Auth.signInWithEmailAndPassword(state.email, state.password)
      .then((resp) => setState({ ...state, authenticated: resp.user ? true : false, loading: false }))
      .catch((error) => {
        setState({ ...state, loading: false });
        console.log('Errrror signing in', error);
      });
  };

  return state.authenticated ? (
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
  ) : (
    <div id="admin-signin-container">
      <span>Sign in to continue</span>
      <input
        placeholder="Enter the email"
        type="email"
        value={state.email}
        onChange={({ target: { value: email } }) => setState({ ...state, email })}
      />
      <input
        placeholder="Enter the password"
        type="password"
        value={state.password}
        onChange={({ target: { value: password } }) => setState({ ...state, password })}
        // onClick={signInwithEmail}
      />
      <button onClick={signInwithEmail}>{state.loading ? 'Please wait...' : 'Login'}</button>
    </div>
  );
};

export default Admin;
