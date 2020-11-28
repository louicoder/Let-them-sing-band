import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './Routes';
import reportWebVitals from './reportWebVitals';
import { init } from '@rematch/core';
import LoadingPlugin from '@rematch/loading';
import * as models from './Store/Models';

require('./Store/FirebaseConfig');

const store = init({ models, plugins: [ LoadingPlugin({ asNumber: false }) ] });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
