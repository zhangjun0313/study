import React from 'react';
import ReactDOM from 'react-dom';

import './base.css'
import './index.css'
import App from './app.js'

// 改变状态，更新视图
let list = [
  {
    id:1,
    title:"天气好123",
    selected: true
  },
  {
    id:3,
    title:"出去玩",
    selected: true
  },
  {
    id:8,
    title:"老张",
    selected: false
  }
]
ReactDOM.render(
  <App list={list}  />, 
  document.getElementById('root')
);

