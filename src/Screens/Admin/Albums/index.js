import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helpers } from '../../../Helper';
import Form from './Form';
import Info from './Info';
import './styles.scss';

const Albums = ({ setProgress }) => {
  const dispatch = useDispatch();
  const [ state, setState ] = React.useState({
    allSongs: [],
    selected: [],
    image: {},
    title: 'A cool title',
    description: 'Some cool description',
    releaseDate: '12/12/2020',
    progress: 0
  });

  React.useEffect(() => {
    getSongs();
  }, []);

  const getSongs = () => dispatch.admin.getAllSongs((response) => setState({ ...state, allSongs: response.songs }));

  const registerAlbum = async () => {
    const { title, releaseDate, description } = state;
    let tracks = [];
    state.allSongs.map((song) => {
      if (state.selected.indexOf(song.id) !== -1) return tracks.push(song);
    });
    await dispatch.admin.registerAlbum({
      payload: { title, releaseDate, description, tracks },
      callback: (response) => {
        console.log('response from reg', response);
        uploadImage(response.id);
      }
    });
  };

  const uploadImage = async (id) => {
    console.log('loggin upload');
    await Helpers.imageUplaoder(
      state.image,
      'albums',
      (progress) => setState({ ...state, progress }),
      async (url) =>
        await dispatch.admin.updateAlbum({
          payload: { image: url },
          id,
          callback: (response) => console.log('REsponse from updating album', response)
        })
    );
  };

  return (
    <div id="album-main-container">
      <p style={{ marginBottom: '20px', fontWeight: '700' }}>START CREATING YOUR NEW ALBUM</p>
      <div id="album-form-info-container">
        <Form
          {...state}
          onChange={({ field, value }) => setState({ ...state, [field]: value })}
          registerAlbum={registerAlbum}
        />
        {state && (
          <Info
            {...state}
            changeCover={(image) => setState({ ...state, image })}
            image={state.image.name && URL.createObjectURL(state.image)}
            name={state.image.name}
            selected={state.selected}
            songs={state.allSongs}
            setSelected={({ id }) =>
              setState({
                ...state,
                selected: state.selected.includes(id)
                  ? [ ...state.selected.filter((se) => se !== id) ]
                  : [ ...state.selected, id ]
              })}
          />
        )}
      </div>
    </div>
  );
};

export default Albums;
