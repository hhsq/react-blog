// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/basicLayout';
import Home from './pages/home';
import Archive from './pages/archive';
import About from './pages/about';
import Links from './pages/links';
import Search from './pages/search';
import NotFound from './components/notFount';

const routerConfig = [
    {
        path: '/home', layout: BasicLayout, component :Home, name: '首页',
        children: [
            {path: '/home', layout: BasicLayout, component :Home, name: '所有'},
            {path: '/home/javascript', layout: BasicLayout, component :Home, name: 'JavaScript'},
            {path: '/home/html', layout: BasicLayout, component :Home, name: 'HTML'},
            {path: '/home/css', layout: BasicLayout, component :Home, name: 'CSS'},
            {path: '/home/vue', layout: BasicLayout, component :Home, name: 'Vue'},
            {path: '/home/react', layout: BasicLayout, component :Home, name: 'React'},
        ]
    },

    {
        path: '/archive',
        layout: BasicLayout,
        component :Archive,
        name: '归档',
    },
    {
        path: '/about',
        layout: BasicLayout,
        component :About,
        name: '关于',
    },
    {
        path: '/links',
        layout: BasicLayout,
        component :Links,
        name: '友情链接',
    },
    {
        path: '/search',
        layout: BasicLayout,
        component :Search,
        name: '活动',
    },
    {
        path: '*',
        name: '404',
        layout: BasicLayout,
        component: NotFound,
    },
    {
        path: '/',
    },
];

export default routerConfig;
