import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Hello from './Hello.js'

const root = ReactDOM.createRoot(document.getElementById('root'));  //react itself makes a DOM (tree structure).
root.render(
  <React.StrictMode>
    <>
      <App/>
      <Hello/>
      <p>lorem11 in npx react app</p>
    </>
  </React.StrictMode>
);


