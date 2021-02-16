import Firebase from 'firebase/app';
import { firestore, storage, auth } from 'firebase';

// const firebaseConfig = {
//   apiKey: 'AIzaSyB3HUL30JVeoDuXvHXfdjabbrfAZMfVVxY',
//   authDomain: 'let-them-sing-band.firebaseapp.com',
//   databaseURL: 'https://let-them-sing-band.firebaseio.com',
//   projectId: 'let-them-sing-band',
//   storageBucket: 'let-them-sing-band.appspot.com',
//   messagingSenderId: '1071372379019',
//   appId: '1:1071372379019:web:32f45c6a217ceed311c58e',
//   measurementId: 'G-7JP4PK92TF'
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAZp8QdDk46shDzYp8_M8u2GAtz-EQWuUY',
  authDomain: 'let-them-sing-band-c4960.firebaseapp.com',
  databaseURL: 'https://let-them-sing-band-c4960.firebaseio.com',
  projectId: 'let-them-sing-band-c4960',
  storageBucket: 'let-them-sing-band-c4960.appspot.com',
  messagingSenderId: '777423130397',
  appId: '1:777423130397:web:e4e4edbae88b7555375bf4',
  measurementId: 'G-Y9KQC98LQF'
};

export default Firebase.initializeApp(firebaseConfig);

export const Firestore = firestore();
export const Storage = storage();
export const Auth = auth();
