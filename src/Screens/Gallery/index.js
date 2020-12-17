import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../Components';
import { randomStringGenerator } from '../../Helper/HelperFunctions';
import SingleImage from './SingleImage';
import './Styles.scss';

const Gallery = () => {
  const dispatch = useDispatch();
  const { getGallery } = useSelector((state) => state.loading.effects.users);
  const [ state, setState ] = React.useState({ gallery: [], view: false, activePhoto: '' });

  React.useEffect(() => {
    dispatch.users.getGallery((response) => {
      console.log('Gallery images', response.result);
      setState({ ...state, gallery: response.result });
    });
  }, []);

  return (
    <div id="gallery-main-container">
      <Loader visible={getGallery} />
      {state.view && (
        <SingleImage setInVisible={() => setState({ ...state, view: false })} imageUrl={state.activePhoto} />
      )}
      <span id="gallery-header">OUR BEAUTIFUL PHOTOS </span>
      <div id="images-container">
        {state.gallery &&
          state.gallery.map(({ url }) => (
            <div
              className="single-gallery-image"
              onClick={() => setState({ ...state, activePhoto: url, view: true })}
              key={randomStringGenerator()}
            >
              <div id="gallery-preview-overlay">{/* <span>Click to View</span> */}</div>
              <img
                src={url}
                // className="single-gallery-image"
              />
            </div>
          ))}
        {state.gallery.length % 3 !== 0 &&
          Array.from({ length: 3 - state.gallery.length % 3 }).map(() => (
            <img
              src={null}
              className="single-gallery-image"
              style={{ opacity: 0, cursor: 'default' }}
              // onClick={() => null}
            />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
