import React from 'react';
import { Button, InputField, MultiLineInput } from '../../Components';
import GoogleMapReact from 'google-map-react';
import './styles.scss';

const Contact = ({ email, review, sendReview, onChange }) => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div id="contact-container">
      <div id="about-map-container" />
      <div id="about-form-container">
        <span id="form">PLEASE SEND US A MESSAGE</span>
        <InputField
          placeholder="Enter your email address"
          // title="Enter your email"
          value={email}
          onChange={(value) => onChange({ field: 'email', value })}
        />
        <MultiLineInput
          placeholder="Enter a review"
          title="Your review"
          value={review}
          onChange={(value) => onChange({ field: 'review', value })}
        />
        <Button title="Send review" onClick={sendReview} btnStyles={{ marginTop: '20px' }} />
      </div>
    </div>
  );
};

export default Contact;
