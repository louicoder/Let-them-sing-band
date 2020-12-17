import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, DateField, InputField, MultiLineInput } from '../../../Components';
import './styles.scss';

const Tours = () => {
  const dispatch = useDispatch();
  const [ state, setState ] = React.useState({
    title: 'Test title',
    description: 'descripton for the tour',
    date: ''
  });

  const createTour = async () => {
    if (!state.date) return alert('Date is not selected');
    const { title, description, date } = state;
    await dispatch.admin.createTour({
      payload: { title, description, date },
      callback: (response) => {
        console.log('REsponse from tour', response);
      }
    });
  };

  return (
    <div id="tours-admin-container">
      <span id="header">CREATE A NEW TOUR</span>
      <InputField
        title="Title"
        placeholder="Title for the tour"
        value={state.title}
        onChange={(title) => setState({ ...state, title })}
        styles={{ marginTop: '40px' }}
      />
      {/* <InputField title="" value={state.name} onChange={({ field, value }) => setState({ ...state, [field]: value })} /> */}
      <DateField title="Date for tour" value={state.date} onChange={(date) => setState({ ...state, date })} />
      <MultiLineInput
        value={state.description}
        onChange={(description) => setState({ ...state, description })}
        placeholder="Add description of the tour so users can understand about this tour"
      />
      <Button title="Create tour " btnStyles={{ marginTop: '20px', width: '100%' }} onClick={createTour} />
    </div>
  );
};

export default Tours;
