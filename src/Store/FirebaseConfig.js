import Firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB3HUL30JVeoDuXvHXfdjabbrfAZMfVVxY',
  authDomain: 'let-them-sing-band.firebaseapp.com',
  databaseURL: 'https://let-them-sing-band.firebaseio.com',
  projectId: 'let-them-sing-band',
  storageBucket: 'let-them-sing-band.appspot.com',
  messagingSenderId: '1071372379019',
  appId: '1:1071372379019:web:32f45c6a217ceed311c58e',
  measurementId: 'G-7JP4PK92TF'
};

export default Firebase.initializeApp(firebaseConfig);
