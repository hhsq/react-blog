import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";
import './header.css'
import './../../assets/common.css'

class Header extends Component {
    static propTypes = {};
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let arr = [
            {
                path: '/home',
                name: '首页',
                icon: 'icon-index',
            },
            {
                path: '/archive',
                name: '归档',
                icon: 'icon-guidang',
            },
            {
                path: '/about',
                name: '关于',
                icon: 'icon-about',
            },
            {
                path: '/events',
                name: '友情链接',
                icon: 'icon-icon-',
            },
            {
                path: '/search',
                name: '搜索',
                icon: 'icon-sousuo',
            },
        ];
        return (
            <div className='header-box'>
                <header>
                    <div className='container'>
                        <a href="/" className="logo iconfont icon-blog-c fs24">

                        </a>
                        <nav>
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <ul className="nav-list">
                                        {
                                            arr.length > 0 && arr.map((item, key) => {
                                                return (
                                                    <li className={`nav-item ${this.props.location.pathname === item.path? "active":""}`} key={key}>
                                                        <Link className={`nav-item-a iconfont ${item.icon}`} to={item.path}> {item.name}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}
export default withRouter(Header)