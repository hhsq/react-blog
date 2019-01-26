import React from 'react';
import ReactDOM from 'react-dom';
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import router from './router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './reset.css';
import todoApp from './store/store'

const CONTAINER = document.getElementById('page');
const store = createStore(todoApp);

ReactDOM.render(<Provider store={store}>{router}</Provider>, CONTAINER);
