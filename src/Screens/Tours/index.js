import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../Components';
import PreviewTour from './PreviewTour';
import SingleTour from './SingleTour';

const Tours = () => {
  const dispatch = useDispatch();
  const { getTours } = useSelector((state) => state.loading.effects.users);
  const [ state, setState ] = React.useState({ preview: true, tours: [], activeTour: {} });

  React.useEffect(() => {
    dispatch.users.getTours((response) => {
      console.log('Here are the tours', response);
      setState({ ...state, tours: response.result });
    });
  }, []);

  return (
    <div id="tours-main-container">
      <Loader visible={getTours} />
      {state &&
      !state.preview && (
        <SingleTour {...state.activeTour} switchPreview={() => setState({ ...state, preview: true })} />
      )}
      {state.preview &&
      state.tours && (
        <PreviewTour {...state} setActiveTour={(activeTour) => setState({ ...state, activeTour, preview: false })} />
      )}
    </div>
  );
};

export default Tours;
