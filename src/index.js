import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWord } from './HelloWord';
import { App } from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWord/>
    <App/>
  </React.StrictMode>
);


