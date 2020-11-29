import { firestore } from 'firebase';
require('../Store/FirebaseConfig');
const db = firestore();

export default {
  state: { songs: [], images: [] },
  reducers: {
    setSongs (state, songs) {
      return { ...state, songs };
    }
  },
  effects: (dispatch) => ({
    async addSong ({ payload, callback }) {
      // get user account.
      await db
        .collection('songs')
        .add(payload)
        .then((snap) => {
          // console.log('Snapshot', snap.id);
          callback({ success: true, id: snap.id });
        })
        .catch((error) => callback({ success: false, error }));
    },

    async updateSong ({ payload, id, callback }) {
      // get user account.
      await db
        .collection('songs')
        .doc(id)
        .set(payload, { merge: true })
        .then(() => {
          callback({ success: true });
        })
        .catch((error) => callback({ success: false, error }));
    },

    async getAllSongs (callback) {
      // get user account.
      await db
        .collection('songs')
        .get()
        .then((snap) => {
          let songs = [];
          // callback({ success: true });
          snap.docs.forEach((doc) => songs.push({ ...doc.data(), id: doc.id }));
          dispatch.admin.setSongs(songs);
          console.log('songs', songs);
          callback({ success: true, songs });
        })
        .catch((error) => callback({ success: false, error }));
    },

    // Add album
    async registerAlbum ({ payload, callback }) {
      // get user account.
      await db
        .collection('albums')
        .add(payload)
        .then((snap) => {
          console.log('Snapshot', snap.id);
          callback({ success: true, id: snap.id });
        })
        .catch((error) => callback({ success: false, error }));
    },

    // Update Album
    async updateAlbum ({ payload, id, callback }) {
      // get user account.
      console.log('reached upadte album');
      await db
        .collection('albums')
        .doc(id)
        .set(payload, { merge: true })
        .then(() => {
          callback({ success: true });
        })
        .catch((error) => callback({ success: false, error }));
    },

    // Add team member
    async registerTeamMember ({ payload, callback }) {
      // get user account.
      await db
        .collection('team')
        .add(payload)
        .then((snap) => {
          console.log('team member', snap.id);
          callback({ success: true, id: snap.id });
        })
        .catch((error) => callback({ success: false, error }));
    },

    // Add team member
    async updateTeamMember ({ payload, id, callback }) {
      await db
        .collection('team')
        .doc(id)
        .set(payload, { merge: true })
        .then((snap) => {
          // console.log('team member', snap.id);
          callback({ success: true });
        })
        .catch((error) => callback({ success: false, error }));
    },

    // Add team member
    async createTour ({ payload, callback }) {
      // get user account.
      await db
        .collection('tours')
        .add(payload)
        .then((snap) => {
          // console.log('team member', snap.id);
          callback({ success: true, id: snap.id });
        })
        .catch((error) => callback({ success: false, error }));
    }
  })
};
