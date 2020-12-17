// require('../Store/FirebaseConfig');
import { Firestore } from './FirebaseConfig';
// const db = firestore();

export default {
  state: { songs: [], teamMembers: [], albums: [], team: [], videos: [] },
  reducers: {
    setSongs (state, songs) {
      return { ...state, songs };
    },
    setAlbums (state, albums) {
      return { ...state, albums };
    },
    setGallery (state, gallery) {
      return { ...state, gallery };
    },
    setTours (state, tours) {
      return { ...state, tours };
    },
    setTeam (state, team) {
      return { ...state, team };
    },
    setVideos (state, videos) {
      return { ...state, videos };
    }
  },
  effects: (dispatch) => ({
    async getSongs (callback) {
      // get user account.
      // console.log('Here in songs');
      await Firestore.collection('songs')
        .get()
        .then((snap) => {
          let songs = [];
          // callback({ success: true });
          snap.docs.forEach((doc) => songs.push({ ...doc.data(), id: doc.id }));
          dispatch.users.setSongs(songs);
          // console.log('songs', songs);
          callback({ success: true, songs });
        })
        .catch((error) => callback({ success: false, error }));
    },

    async getAlbums (callback) {
      // get user account.
      await Firestore.collection('albums')
        .get()
        .then((snap) => {
          let albums = [];
          // callback({ success: true });
          snap.docs.forEach((doc) => albums.push({ ...doc.data(), id: doc.id }));
          dispatch.users.setAlbums(albums);
          callback({ success: true, albums });
        })
        .catch((error) => callback({ success: false, error }));
    },

    // Get gallery images
    async getGallery (callback) {
      // get user account.
      await Firestore.collection('gallery')
        .get()
        .then((snap) => {
          let gallery = [];
          // callback({ success: true });
          snap.docs.forEach((doc) => gallery.push({ ...doc.data(), id: doc.id }));
          dispatch.users.setGallery(gallery);
          // console.log('gallery', gallery);
          callback({ success: true, result: gallery });
        })
        .catch((error) => callback({ success: false, error }));
    },

    // Get gallery images
    async getTours (callback) {
      // get user account.
      await Firestore.collection('tours')
        .get()
        .then((snap) => {
          let tours = [];
          // callback({ success: true });
          snap.docs.forEach((doc) => tours.push({ ...doc.data(), id: doc.id }));
          dispatch.users.setTours(tours);
          // console.log('gallery', gallery);
          callback({ success: true, result: tours });
        })
        .catch((error) => callback({ success: false, error }));
    },

    // Get gallery images
    async getTeam (callback) {
      // get user account.
      await Firestore.collection('team')
        .get()
        .then((snap) => {
          let team = [];
          // callback({ success: true });
          snap.docs.forEach((doc) => team.push({ ...doc.data(), id: doc.id }));
          dispatch.users.setTeam(team);
          // console.log('gallery', gallery);
          callback({ success: true, result: team });
        })
        .catch((error) => callback({ success: false, error }));
    },

    async sendReview ({ payload, callback }) {
      // get user account.
      await Firestore.collection('reviews')
        .add(payload)
        .then((response) => {
          console.log('REsponse', response);
          callback({ success: true, result: 'Successfully sent review' });
        })
        .catch((error) => callback({ success: false, error }));
    },

    async getAllVideos (callback) {
      // get user account.
      console.log('Videps xxx');
      await Firestore.collection('videos')
        .get()
        .then((snap) => {
          let videos = [];
          // callback({ success: true });
          snap.docs.forEach((doc) => videos.push({ ...doc.data(), id: doc.id }));
          dispatch.users.setVideos(videos);
          callback({ success: true, videos });
        })
        .catch((error) => callback({ success: false, error }));
    }
  })
};
