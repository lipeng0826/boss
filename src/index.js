import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerMicroApps, start } from 'qiankun';

const root = ReactDOM.createRoot(document.getElementById('root-boss'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerMicroApps([
  {
    name: 'pinyin', // 目前pinyin项目没有改造成微前端项目，能打开，但是没有注册微前端
    entry: 'http://localhost/pinyin/index.html',
    container: '#vue', // 挂载在那个标签上
    activeRule: '/pinyin.html',
  },
  {
    name: 'vue app', // vue app
    // 开发环境
    // entry: 'http://localhost:3002',
    // nginx部署
    entry: 'http://ijiaoyan.web.com/vue/index.html',
    container: '#vue',
    activeRule: '/vue.html',
  },
  {
    name: 'react app', // react app
    // 开发环境
    // entry: 'http://localhost:3001',
    // nginx部署
    entry: 'http://ijiaoyan.web.com/react/index.html',
    container: '#react',
    activeRule: '/react.html',
  },
]);

start();
