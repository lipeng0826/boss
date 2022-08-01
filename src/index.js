import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerMicroApps, start } from 'qiankun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerMicroApps([
  // {
  //   name: 'vue app', // app name registered
  //   entry: 'http://localhost:10000',
  //   container: '#vue',
  //   activeRule: '/vue.html',
  // },
  {
    name: 'react app',
    entry: 'http://localhost:3001',
    container: '#react',
    activeRule: '/react.html',
  },
]);

start();
