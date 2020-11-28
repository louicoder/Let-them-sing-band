import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonUpload, UploadProgress } from '../../../Components';
import './styles.scss';

const Info = ({ setSelected, songs, selected, image, changeCover, name, progress }) => {
  // const { songs } = useSelector((state) => state.admin);
  console.log('Image name', name);
  return (
    <div id="album-info-container">
      {progress && progress < 100 ? <UploadProgress progress={progress} /> : null}
      {/* <span>this is the form</span> */}
      {name ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          File - [ <p>{name}</p> ]
        </div>
      ) : null}
      <div style={{ width: '100%', boxSizing: 'border-box', marginTop: '10px' }}>
        <img src={image} style={{ width: '100%', height: 'auto' }} />
      </div>
      <ButtonUpload
        styles={{ marginTop: '15px' }}
        title="Click Upload album cover"
        onChange={changeCover}
        acceptedFiles=".png,.jpeg,.jpg,.JPG,.PNG,.JPEG"
      />
      <p>Select songs to add to album</p>
      {songs.map((song) => (
        <div
          id="song-checkbox-container"
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={() => setSelected(song)}
        >
          <input type="checkbox" id={song.id} checked={selected.includes(song.id)} onChange={() => setSelected(song)} />
          <label htmlFor={song.id} onClick={() => setSelected(song)}>
            {song.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Info;
