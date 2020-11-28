import React from 'react';
import SVGComp from '../../../Components/VectorComp';
import { Icon } from '../../../Helper';
import AddSong from './AddSong';
import AllSongs from './AllSongs';
import EditSong from './EditSong';
import './styles.scss';

const Songs = ({ setProgress, setVisible }) => {
  const [ state, setState ] = React.useState({ mode: 'view' });

  const renderComponent = () => {
    switch (state.mode) {
      case 'view':
        return <AllSongs addNewSong={() => setState({ ...state, mode: 'add' })} />;
      case 'edit':
        return <EditSong />;
      case 'add':
        return <AddSong setProgress={setProgress} setVisible={setVisible} />;
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
          padding: '10px 0px 30px',
          marginBottom: '30px',
          borderBottom: '1px solid #ddd'
        }}
      >
        <span style={{ fontWeight: '600' }}>Add a new song to your collection</span>
        <SVGComp
          path={Icon.close}
          hover
          styles={{ display: state.mode !== 'view' ? 'flex' : 'none' }}
          onClick={() => setState({ ...state, mode: 'view' })}
        />
      </div>
      {renderComponent()}
    </div>
  );
};

export default Songs;
