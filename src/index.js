import ReactDOM from 'react-dom';
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import router from './router';
import './reset.css'
const CONTAINER = document.getElementById('page');

ReactDOM.render(router, CONTAINER);
