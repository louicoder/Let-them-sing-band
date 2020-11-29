import React from 'react';
import { useDispatch } from 'react-redux';
import { Helpers } from '../../../Helper';
import Form from './Form';
import ImageAndUpload from './ImageAndUpload';
import './styles.scss';

const TeamMembers = () => {
  const dispatch = useDispatch();
  const [ state, setState ] = React.useState({
    name: 'Louis michael',
    role: 'saxophone',
    description: 'Jus a regular member nothing big',
    image: {},
    progress: 0
  });

  const registerTeamMember = async () => {
    const { name, role, description } = state;

    await dispatch.admin.registerTeamMember({
      payload: { name, role, description },
      callback: (response) => {
        console.log('Response', response);
        return uploadImage(response.id);
      }
    });
  };

  const uploadImage = async (id) => {
    // console.log('loggin upload');
    await Helpers.imageUplaoder(
      state.image,
      'team',
      (progress) => setState({ ...state, progress }),
      async (url) =>
        await dispatch.admin.updateTeamMember({
          payload: { image: url },
          id,
          callback: (response) => console.log('REsponse from updating album', response)
        })
    );
  };

  return (
    <div id="team-members-main-container">
      <Form
        {...state}
        onChange={({ field, value }) => setState({ ...state, [field]: value })}
        registerTeamMember={registerTeamMember}
      />
      <ImageAndUpload
        {...state}
        setImage={(image) => setState({ ...state, image })}
        obj={state.image.name && URL.createObjectURL(state.image)}
      />
    </div>
  );
};

export default TeamMembers;
