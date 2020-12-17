import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { Button, InputField } from '../../../Components';
import SVGComp from '../../../Components/VectorComp';
import { Icon } from '../../../Helper';

const Videos = ({}) => {
  const [ url, setUrl ] = React.useState('https://www.youtube.com/watch?v=i9aSp9bFmMg');
  const [ title, setTitle ] = React.useState('One more video');
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.effects.admin);

  const saveVideo = () => {
    if (!title) return alert('Please enter the title for the video');
    if (!url) return alert('Please enter the url for the video');

    dispatch.admin.saveVideo({
      payload: { title, url },
      callback: (response) => {
        console.log('Response from videos', response);
        if (response.success) {
          setTitle('');
          setUrl('');
        }
      }
    });
  };

  return (
    <div
      style={{
        width: '50%',
        height: '80vh',
        display: 'flex',
        // alignItems: 'center',
        flexDirection: 'column'
        // border: '1px solid black'
      }}
    >
      {/* <div> */}
      <span style={{ fontWeight: '700', fontSize: '20px', marginBottom: '20px' }}>Enter the details for the video</span>
      <InputField
        title="Enter title"
        placeholder="Enter the title of video"
        value={title}
        onChange={(e) => setTitle(e)}
        styles={{ marginTop: '20px' }}
      />
      <InputField
        title="Paste video link"
        placeholder="Paste here the video link"
        value={url}
        onChange={(e) => setUrl(e)}
      />
      <Button onClick={saveVideo} title="Save video" btnStyles={{ width: '100%' }} loading={loading.saveVideo} />

      {url ? (
        <ReactPlayer
          url={url}
          style={{ width: '300px', height: 'auto', marginTop: '20px' }}
          // onError={() => alert("Something went wrong while rendering the video. please make sure it's a vlid url")}
        />
      ) : null}
      {/* </div> */}
    </div>
  );
};

export default Videos;
