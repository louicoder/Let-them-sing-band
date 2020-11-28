import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AudioPlayer, Button, ButtonUpload } from '../../../Components';
import MenuOptions from '../../../Components/MenuOptions';
import { Helpers } from '../../../Helper';
import './styles.scss';

const AllSongs = ({ addNewSong }) => {
  const dispatch = useDispatch();
  const { songs } = useSelector((state) => state.admin);
  const [ state, setState ] = React.useState({ activeSong: {} });
  React.useEffect(() => {
    getAllSongs();
  }, []);

  const getAllSongs = () => {
    dispatch.admin.getAllSongs((callback) => console.log(' Songs', callback));
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div id="all-songs-header-container">
        <span>This is the all songs view</span>
        <div id="all-songs-audio-container">
          <Button title="Add new song" btnStyles={{ marginRight: '20px' }} onClick={addNewSong} />
          <AudioPlayer file={state.activeSong.url} />
        </div>
      </div>
      <div>
        <table id="table">
          <tr>
            <th>Title</th>
            <th>Release date</th>
            <th>Album</th>
          </tr>

          {songs &&
            songs.length &&
            songs.map(({ title, albumTitle, releaseDate, ...rest }) => (
              <tr
                key={Helpers.randomStringGenerator()}
                onClick={() => setState({ ...state, activeSong: { ...rest, title, albumTitle, releaseDate } })}
              >
                <td>{title}</td>
                <td>{releaseDate}</td>
                <td>{albumTitle}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default AllSongs;
