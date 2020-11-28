import { registerVersion } from 'firebase';
import React from 'react';
import { useSelector } from 'react-redux';
import { Button, DateField, InputField, MultiLineInput } from '../../../Components';

const Form = ({ description, releaseDate, title, onChange, registerAlbum, progress }) => {
  const loading = useSelector((state) => state.loading.effects.admin);
  return (
    <div id="add-album-container">
      <InputField
        placeholder="Enter Album title"
        title="Album title"
        value={title}
        onChange={(value) => onChange({ field: 'title', value })}
      />
      <DateField
        title="Release date"
        placeholder="DD/MM/YYYY"
        value={releaseDate}
        onChange={(value) => onChange({ field: 'releaseDate', value })}
      />
      <MultiLineInput
        placeholder="Add a description for this album to help users know more about it"
        value={description}
        onChange={(value) => onChange({ field: 'description', value })}
      />
      <Button
        title="Create Album"
        btnStyles={{ width: '100%', margin: '20px 0px' }}
        onClick={registerAlbum}
        loading={loading.registerAlbum || (progress > 0 && progress < 100)}
      />
    </div>
  );
};

export default Form;
