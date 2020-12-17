import React from 'react';
import './Styles.scss';
import background from '../../assets/bac1.jpg';
import { Button } from '../../Components';

const Cover = ({ navigate }) => {
  const btnStyles = {
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    width: '24%',
    color: '#fff',
    fontWeight: '700',
    fontSize: '20px',
    borderRadius: '5px',
    ':hover': {
      backgroundColor: 'red'
    }
  };
  return (
    <div id="cover-container">
      <img src={background} width="100%" height="100%" />
      <div id="inner-cover-container">
        <Button title="Gallery" btnStyles={btnStyles} hover onClick={() => navigate('/gallery')} />
        <Button title="Music" btnStyles={btnStyles} hover onClick={() => navigate('/music')} />
        <Button title="Band" btnStyles={btnStyles} hover onClick={() => navigate('/band')} />
        <Button title="Tours" btnStyles={btnStyles} hover onClick={() => navigate('/tours')} />
        <span
          style={{
            fontSize: '4em',
            fontWeight: '700',
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginTop: '20px',
            color: '#fff'
          }}
        >
          LET THEM SING BAND
        </span>
        {/* <div
          style={{
            // position: 'absolute',
            width: '100%',
            display: 'flex',
            // padding: '30px',
            flexDirection: 'column',
            // // border: '1px solid #fff',
            // color: 'rgba(255,255,255,1)',
            // backgroundColor: 'rgba(0,0,0,.65)',
            // boxSizing: 'border-box',
            marginTop: '30px'
            // fontSize: '25px'
          }}
        >
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne amores quidem sanctos a sapiente alienos esse
            arbitrantur. Si quicquam extra virtutem habeatur in bonis. Quasi ego id curem, quid ille aiat aut neget. Duo
            Reges: constructio interrete. Prioris generis est docilitas, memoria; Tu autem negas fortem esse quemquam
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Cover;
