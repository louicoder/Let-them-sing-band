import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonUpload, Loader, UploadProgress } from '../../../Components';
import { Helpers } from '../../../Helper';

const Gallery = ({ setVisible, setProgress }) => {
  const [ state, setState ] = React.useState({ image: null, progress: 0, loading: false });
  const loading = useSelector((state) => state.loading.effects.admin);
  const dispatch = useDispatch();

  const uploadImage = async (id) => {
    // console.log('loggin upload');
    if (!state.image.name) return alert('Image is missing, select and image to continue');
    // setState({ ...state, loading: true });
    await Helpers.imageUplaoder(
      state.image,
      'gallery',
      (progress) => {
        setVisible(true);
        setState({ ...state, progress });
      },
      async (url) =>
        await dispatch.admin.addToGallery({
          payload: { url },
          callback: (response) => {
            setState({ ...state, image: null });
            setVisible(true);

            console.log('REsponse from updating album', response);
          }
        })
    );
  };

  return (
    <div style={{ width: '100%' }}>
      {/* <Loader visible={state.loading || loading.addToGallery} progress={state.progress} /> */}
      {state.image && (
        <ButtonUpload
          title="Change image to upload"
          styles={{ width: '30%' }}
          onChange={(image) => setState({ ...state, image })}
        />
      )}
      {!state.image && (
        <div
          style={{
            height: '60vh',
            width: '100%',
            margin: '20px 0px',
            backgroundColor: '#eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ButtonUpload
            labelColor="white"
            title="Select an image to add to gallery"
            styles={{ width: '30%', backgroundColor: 'black', color: 'white' }}
            onChange={(image) => setState({ ...state, image })}
          />
        </div>
      )}
      {state.image && (
        <img
          src={state.image && URL.createObjectURL(state.image)}
          style={{ maxHeight: '60vh', width: '100%', objectFit: 'cover', margin: '20px 0px' }}
        />
      )}

      {state.progress > 0 && state.progress < 100 ? (
        <UploadProgress styles={{ marginBottom: '20px' }} progress={state.progress} />
      ) : null}

      <Button
        title="Click to add photo"
        btnStyles={{ width: '30%', borderRadius: '5px' }}
        disabled={false}
        loading={loading.addToGallery}
        onClick={uploadImage}
      />
    </div>
  );
};

export default Gallery;
