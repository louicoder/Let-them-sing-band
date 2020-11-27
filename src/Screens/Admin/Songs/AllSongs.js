import React from 'react';
import { Button, ButtonUpload } from '../../../Components';

const AllSongs = () => {
  return (
    <div>
      <p>This is the all songs view</p>
      <Button title="Text me" fileSelector acceptedFiles=".mp3" />
      <ButtonUpload />
    </div>
  );
};

export default AllSongs;
