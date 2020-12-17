import React from 'react';
import { Button, InputField, MultiLineInput } from '../../Components';
import GoogleMapReact from 'google-map-react';
import './styles.scss';

const Contact = ({ email, review, sendReview, onChange }) => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div id="contact-container">
      <div id="about-map-container">
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAwnMCGKCU-ut0DwhLTQgz1v9OmKuc0mMY', region: 'ug' }}
          defaultCenter={{
            lat: 0.2755079,
            lng: 32.6135808
          }}
          defaultZoom={{ zoom: 11 }}
          onGoogleApiLoaded={({ maps, map }) => console.log('Loaded map', map)}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent lat={0.2755079} lng={32.6135808} text="My Marker" />
        </GoogleMapReact> */}
      </div>
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
