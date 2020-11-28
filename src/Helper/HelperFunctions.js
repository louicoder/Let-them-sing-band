import { storage } from 'firebase';

export const randomStringGenerator = () => Math.random().toString(36).slice(2);

export const firebaseImageUploader = (image, path, setProgress, callback) => {
  // console.log('Image', image, 'Path', path);
  if (!path || !image) return;
  return new Promise((resolve, reject) => {
    const { name, path: fileObj, type } = image;
    const _file = new Blob([ fileObj ], { type: 'audio/mp3' });
    // const storageRef = storage().ref();
    const urlRef = storage().ref().child(`${path}/${name}`).put(image);

    urlRef.on(
      'state_changed',
      (snapshot) => {
        let progress = Math.ceil(snapshot.bytesTransferred / snapshot.totalBytes * 100);
        console.log('upload Progress', progress);
        setProgress(progress);
      },
      (error) => {
        reject({ error });
      },
      async (snapshot) => {
        const url = await storage().ref().child(`${path}/${image.name}`).getDownloadURL();
        resolve(callback(url));
      }
    );
  });
};

export const imageUplaoder = (image, path, setProgress, callback) => {
  console.log('upload', image);
  // if (!path || !image) return;
  return new Promise((resolve, reject) => {
    console.log('Image properties', image, path);

    const { name, path: fileObj, type } = image;
    const _file = new Blob([ image ], { type });
    // const storageRef = storage().ref();
    const urlRef = storage().ref().child(`${path}/${name}`).put(_file);

    urlRef.on(
      'state_changed',
      (snapshot) => {
        let progress = Math.ceil(snapshot.bytesTransferred / snapshot.totalBytes * 100);
        console.log('upload Progress', progress);
        setProgress(progress);
      },
      (error) => {
        reject({ error });
      },
      async (snapshot) => {
        const url = await storage().ref().child(`${path}/${image.name}`).getDownloadURL();
        resolve(callback(url));
      }
    );
  });
};
