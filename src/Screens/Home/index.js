import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../Components';
import ChooseUs from './Links';
import Cover from './Cover';
import LatestAlbum from './LatestAlbum';
import UpcomingEvents from './UpcomingEvents';

const Home = ({ history }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.effects.users);

  React.useEffect(() => {
    dispatch.users.getAlbums((response) => {
      console.log('Response', response);
    });
  }, []);

  return (
    <div id="home-container">
      {/* <Loader visible={loading.getAlbums} /> */}
      <Cover navigate={(route) => history.push(route)} />
    </div>
  );
};

export default Home;
