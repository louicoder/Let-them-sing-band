import React from 'react';
import { Button, ButtonUpload, InputField, MultiLineInput, UploadProgress } from '../../../Components';
import SVGComp from '../../../Components/VectorComp';
import { Icon } from '../../../Helper';
import './styles.scss';

const AddSong = () => {
  return (
    <div id="add-song-container">
      <InputField styles={{ width: '50%' }} title="Song title" />
      <InputField styles={{ width: '50%' }} title="Song title" />
      <InputField styles={{ width: '50%' }} title="Song title" />
      <ButtonUpload styles={{ width: '50%', marginBottom: '15px' }} acceptedFiles=".mp3" />
      <MultiLineInput styles={{ width: '50%' }} />
      <UploadProgress progress={10} styles={{ width: '50%' }} />
      <Button title="Add song" btnStyles={{ margin: '15px 0px', width: '50%' }} />
    </div>
  );
};

export default AddSong;
