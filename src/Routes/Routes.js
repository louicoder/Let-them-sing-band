import { About, Band, Contact, Gallery, Home, Music, Admin, Tours } from '../Screens';

export default [
  { path: '/about', exact: true, component: About },
  { path: '/band', exact: true, component: Band },
  { path: '/contact', exact: true, component: Contact },
  { path: '/gallery', exact: true, component: Gallery },
  { path: '/home', exact: true, component: Home },
  { path: '/music', exact: true, component: Music },
  { path: '/admin', exact: true, component: Admin },
  { path: '/admin/:component', exact: true, component: Admin },
  { path: '/', exact: true, component: Home }
];
