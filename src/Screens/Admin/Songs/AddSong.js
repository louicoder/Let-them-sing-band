import React from 'react';
import { useDispatch } from 'react-redux';
import {
  AudioPlayer,
  Button,
  ButtonUpload,
  DateField,
  InputField,
  Loader,
  MultiLineInput,
  UploadProgress
} from '../../../Components';
import { Helpers } from '../../../Helper';
// import SVGComp from '../../../Components/VectorComp';
// import { Icon } from '../../../Helper';
import './styles.scss';

const AddSong = ({ setProgress, setVisible }) => {
  const dispatch = useDispatch();
  const [ state, setState ] = React.useState({
    title: 'title of song',
    releaseDate: '',
    albumTitle: 'title of album',
    description: 'This is tjust the description of the album',
    file: {},
    fileObject: '',
    progress: 0
  });

  const registerSong = async () => {
    if (!state.title) return alert('Song title is required');
    if (!state.file.name) return alert('Song is required, upload song on the right');
    if (!state.albumTitle) return alert('Album title  is required');
    if (!state.releaseDate) return alert('Release date is required');

    // setVisible(true);
    const { title, releaseDate, albumTitle, description } = state;
    await dispatch.admin.addSong({
      payload: { title, releaseDate, albumTitle, description, dateCreated: new Date().toISOString() },
      callback: (response) => {
        console.log('Response from firestore', response);
        if (!response.success) console.log('Error regoserof', response);
        return uploadfile(response.id);
      }
    });
  };

  const uploadfile = async (id) => {
    await Helpers.firebaseImageUploader(
      state.file,
      'songs',
      (progress) => {
        // setVisible(true);
        setState({ ...state, progress });
      },
      (url) => {
        dispatch.admin.updateSong({
          payload: { url },
          id,
          callback: (response) => {
            console.log('Response from updateing song', response);
            setVisible(false);
          }
        });
      }
    );
  };

  return (
    <div id="main-add-song-container">
      <div id="add-song-container">
        <InputField title="Song title" value={state.title} onChange={(title) => setState({ ...state, title })} />

        <InputField
          title="Album title"
          value={state.albumTitle}
          onChange={(albumTitle) => setState({ ...state, albumTitle })}
        />

        <DateField
          styles={{}}
          title="Enter date of release"
          value={state.releaseDate}
          onChange={(releaseDate) => setState({ ...state, releaseDate })}
        />
        <MultiLineInput
          value={state.description}
          title="Description"
          placeholder="Please enter the description of the song here"
          onChange={(description) => setState({ ...state, description })}
        />
        <Button
          loading={state.progress && state.progress < 100}
          title="Add song to catalogue"
          btnStyles={{ margin: '20px 0px' }}
          onClick={registerSong}
        />
      </div>
      <div id="songs-info-container">
        <span>This is the best info where that you can find the best option on the way the suggest</span>
        <ButtonUpload onChange={(file, fileObject) => setState({ ...state, file, fileObject })} acceptedFiles=".mp3" />
        <p style={{ fontWeight: '600', border: '1px solid #eee', padding: '15px' }}>
          Selected File: <span style={{ color: '#aaa' }}>[ {state.file ? state.file.name : 'no selected file'} ]</span>
        </p>
        {state.progress && state.progress < 100 ? <UploadProgress progress={state.progress} /> : null}
      </div>
    </div>
  );
};

export default AddSong;
