import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Icon } from '../Helper';
import './styles.scss';
import SVGComp from './VectorComp';

const Header = ({ location: { pathname } }) => {
  // console.log('Header', props.location.pathname.split('/')[1]);
  const [ showHeader, setShowHeader ] = React.useState(true);
  const [ menuShowing, setMenuShowing ] = React.useState(false);

  React.useEffect(() => {
    if (pathname.split('/').includes('admin')) setShowHeader(false);
  }, []);

  return showHeader && showHeader ? (
    <div>
      <div id="navigation">
        <NavLink to={{ pathname: '/' }}>Home</NavLink>
        <NavLink to={{ pathname: '/music' }}>discography</NavLink>
        <NavLink to={{ pathname: '/band' }}>band</NavLink>
        <NavLink to={{ pathname: '/tours' }}>tours</NavLink>
        <NavLink to={{ pathname: '/gallery' }}>gallery</NavLink>
        <NavLink to={{ pathname: '/about' }}>about</NavLink>
        {/* <NavLink to={{ pathname: '/contact' }}>contact</NavLink> */}
        {/* <NavLink to={{ pathname: '/admin' }}>Login</NavLink> */}
      </div>
      <div id="mobile-menu">
        <div id="menu-icon-container">
          <SVGComp path={menuShowing ? Icon.close : Icon.menu} onClick={() => setMenuShowing(!menuShowing)} />
          <p>MENU</p>
        </div>

        {menuShowing && (
          <div id="nav-mobile">
            <NavLink to={{ pathname: '/' }}>
              <SVGComp path={Icon.home} /> Home
            </NavLink>
            <NavLink to={{ pathname: '/music' }}>
              <SVGComp path={Icon.music} />discography
            </NavLink>
            <NavLink to={{ pathname: '/band' }}>
              <SVGComp path={Icon.album} /> band
            </NavLink>
            <NavLink to={{ pathname: '/tours' }}>
              <SVGComp path={Icon.bus} /> tours
            </NavLink>
            <NavLink to={{ pathname: '/gallery' }}>
              <SVGComp path={Icon.gallery} /> gallery
            </NavLink>
            <NavLink to={{ pathname: '/about' }}>
              <SVGComp path={Icon.reviews} /> about
            </NavLink>
            {/* <NavLink to={{ pathname: '/contact' }}>contact</NavLink> */}
            {/* <NavLink to={{ pathname: '/admin' }}>Login</NavLink> */}
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default withRouter(Header);
