import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../Components';
import About from './About';
import Contact from './Contact';
import './styles.scss';

const AboutUs = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.effects.users);
  const [ state, setState ] = React.useState({ email: '', review: '' });

  const sendReview = async () =>
    await dispatch.users.sendReview({
      payload: { email: state.email, review: state.review },
      callback: (response) => {
        if (response.success) return setState({ ...state, email: '', review: '' });
      }
    });

  return (
    <div id="about-main-container">
      <Loader visible={loading.sendReview || false} />
      <About />
      <Contact
        sendReview={sendReview}
        {...state}
        onChange={({ field, value }) => setState({ ...state, [field]: value })}
      />
    </div>
  );
};

export default AboutUs;
