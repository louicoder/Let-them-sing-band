import React from 'react';
import SVGComp from '../../../Components/VectorComp';
import { Icon } from '../../../Helper';
import AddSong from './AddSong';
import AllSongs from './AllSongs';
import EditSong from './EditSong';
import './styles.scss';

const Songs = () => {
  const [ state, setState ] = React.useState({ mode: 'add' });

  const renderComponent = () => {
    switch (state.mode) {
      case 'view':
        return <AllSongs />;
      case 'edit':
        return <EditSong />;
      case 'add':
        return <AddSong />;
    }
  };
  return (
    <div id="songs-container">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
          padding: '10px 0px',
          marginBottom: '30px',
          borderBottom: '1px solid #ddd'
        }}
      >
        <span style={{ fontWeight: '600' }}>Add a new song to your collection</span>
        <SVGComp path={Icon.close} hover styles={{ display: 'none' }} />
      </div>
      {renderComponent()}
    </div>
  );
};

export default Songs;
