import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './styles.scss';

const Header = ({ location: { pathname } }) => {
  // console.log('Header', props.location.pathname.split('/')[1]);
  const [ showHeader, setShowHeader ] = React.useState(true);

  React.useEffect(() => {
    if (pathname.split('/').includes('admin')) setShowHeader(false);
  }, []);

  return showHeader && showHeader ? (
    <div style={{ width: '100%' }} id="navigation">
      <NavLink to={{ pathname: '/' }}>Home</NavLink>
      <NavLink to={{ pathname: '/about' }}>about</NavLink>
      <NavLink to={{ pathname: '/discography' }}>discography</NavLink>
      <NavLink to={{ pathname: '/band' }}>band</NavLink>
      <NavLink to={{ pathname: '/tours' }}>tours</NavLink>
      <NavLink to={{ pathname: '/gallery' }}>gallery</NavLink>
      <NavLink to={{ pathname: '/contact' }}>contact</NavLink>
    </div>
  ) : null;
};

export default withRouter(Header);
