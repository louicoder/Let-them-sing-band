import React from 'react';
import { Icon } from '../Helper';
import SVGComp from './VectorComp';
import './styles.scss';
import { withRouter } from 'react-router-dom';

const Footer = ({ location: { pathname } }) => {
  // console.log('props in footer', props);

  const checkPath = (path) =>
    [
      '/admin',
      '/admin/songs',
      '/admin/albums',
      '/admin/team',
      '/admin/tours',
      '/admin/reviews',
      '/admin/gallery',
      '/admin/videos'
    ].includes(path);
  return checkPath(pathname) ? null : (
    <div id="footer-container">
      <SVGComp path={Icon.soundCloud} styles={{ width: '100px', height: '100px' }} fill="#eee" />
      <span style={{ fontSize: '24px' }}>STAY IN TOUCH</span>
      <span style={{ margin: '20px 0px' }}>Contact Us</span>
      <div style={{ display: 'flex' }}>
        <a href="https://www.facebook.com/letthemsingband/">
          <SVGComp path={Icon.facebook} styles={styles} hover fill="blue" />
        </a>
        <a href="#">
          <SVGComp path={Icon.twitter} styles={styles} hover fill="rgb(0,	155,	238)" />
        </a>
        <a href="#">
          <SVGComp path={Icon.instagram} styles={styles} hover fill="#3f729b" />
        </a>
        <a href="https://www.youtube.com/channel/UCAXFan6pH8Fp5u1ms4hOBVw/channels">
          <SVGComp path={Icon.youtube} styles={styles} hover fill="#ff0000" />
        </a>
      </div>
      <div id="footer-lower-container">
        <span>
          Let Them Sing Band - <a href="#">Privacy policy</a>
          <a href="#">Terms of use</a>
          <a href="#">AdChoices</a>
        </span>
        <span />
      </div>
    </div>
  );
};

export default withRouter(Footer);

const styles = { width: '30px', height: '30px' };
