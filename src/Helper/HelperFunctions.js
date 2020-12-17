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

export const returnMonth = (num) => {
  console.log('Number', num);
  switch (num) {
    case 1:
      return 'JAN';
    case 2:
      return 'FEB';
    case 3:
      return 'MAR';
    case 4:
      return 'APR';
    case 5:
      return 'MAY';
    case 6:
      return 'JUN';
    case 7:
      return 'JUL';
    case 8:
      return 'AUG';
    case 9:
      return 'SEP';
    case 10:
      return 'OCT';
    case 11:
      return 'NOV';
    case 12:
      return 'DEC';
  }
};
