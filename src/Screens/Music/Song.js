import React from 'react';
import { AudioPlayer, Button } from '../../Components';
import { returnMonth } from '../../Helper/HelperFunctions';
import './Styles.scss';

const Song = ({
  title,
  releaseDate,
  description,
  albumTitle,
  url,
  dateCreated,
  autoPlay,
  download: dn,
  downloadFile,
  ...rest
}) => {
  console.log('rest', autoPlay);

  return (
    <div id="single-song-container">
      <span id="song-header">{title}</span>
      <AudioPlayer file={url} autoPlay={autoPlay} extStyles={{ width: '100%' }} />
      <span style={{ fontWeight: '600', margin: '20px 0px' }}>
        Date Released:
        <span style={{ fontWeight: 'normal', marginLeft: '10px', color: '#FFF' }}>
          {returnMonth(parseInt(releaseDate.split('-')[1]))} - {releaseDate.split('-')[2]} - {releaseDate.split('-')[0]}
        </span>
      </span>
      {/* <Button title="Download song" btnStyles={{ margin: '0px 0px 20px' }} /> */}
      <span>{description}</span>
      {/* <a href={url.split('?')[0]} download onClick={downloadFile}>
        Click to download file
      </a> */}
      {/* <span>{description}</span> */}
    </div>
  );
};

export default Song;
