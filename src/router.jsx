/**
 * 生成路由文件
 */
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

import routerConfig from './routerConfig';

/**
 * 将routerConfig进行处理
 * 拿到想要的数据结构
 */
function setRouterConfig(config) {
    const routerArr = [];
    config.forEach( item=> {
        const route = {
            path: item.path,
            layout: item.layout,
            component: item.component,
        };
        if (Array.isArray(item.children)) {
            route.children = setRouterConfig(item.children);
        }
        routerArr.push(route);
    });
    return routerArr;
}
/**
 * 生成路由节点
 * @param {Element} container 路由容器
 * @param {object} router 路由对象
 * @param {string} contextPath 上层路由地址
 * <Switch>
 *   <Route exact path="/" component={Home} />
 *   <Route exact path="/page1" component={Home} />
 *   <Route exact component={NotFound} />
 * </Switch>
 */
function createdRouter(container,router) {
    const routeChildren = [];

    const renderRoute = (routeContainer,routeItem) => {
        let routePath;
        if (!routeItem.path) {
            console.error('route must has `path`');
        } else {
            routePath = routeItem.path;
        }

        if (routeItem.layout && routeItem.component) {
            routeChildren.push(
                <Route
                    key={routePath}
                    exact
                    path={routePath}
                    render={(props) => {
                    return React.createElement(
                        routeItem.layout,
                        props,
                        React.createElement(routeItem.component, props)
                    );
                }}
                />
            );
        } else if (routeContainer && routeItem.component) {
            routeChildren.push(
                <Route
                    key={routePath}
                    exact
                    path={routePath}
                    render={(props) => {
                        return React.createElement(
                            routeContainer,
                            props,
                            React.createElement(routeItem.component, props)
                        );
                    }}
                />
            )
        } else {
            routeChildren.push(
                <Route
                    key={routePath}
                    exact
                    path={routePath}
                    component={routeItem.component}
                />
            );
        }

        // 存在子路由，递归当前路径，并添加到路由中
        if (Array.isArray(routeItem.children)) {
            routeItem.children.forEach((r) => {
                renderRoute(routeItem.component, r);
            });
        }
    };
    router.forEach((r) => {
        renderRoute(container,r);
    });
    return <Switch>{routeChildren}</Switch>
}
const reactRouter = setRouterConfig(routerConfig);
const renderRouter = createdRouter(null,reactRouter);
export default <Router>{renderRouter}</Router>