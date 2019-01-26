import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import {blogContent} from './../../store/actions.js'
import './nav.css'
import './../../assets/common.css'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={`top-view ${this.props.isShowNav.isShow?"":"top"}`}>
                <nav>
                    <ul className="nav-list">
                        {
                             this.props.navArr.map((item, key) => {
                                return (
                                    <li className={`nav-item ${this.props.location.pathname === item.path? "active":""}
                                    ${(this.props.location.pathname === '/home' && item.path === '/home/all')? "active":""}`} key={key}>
                                        <Link to={item.path}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        )
    }
    componentDidMount() {
        this.props.switchType()
    }
}
function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        switchType () {
            // 这里可调用接口
            let arr = [
                {
                    title: "从标准原理出发理解 JavaScript 数值精度",
                    content: "从标准原理出从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'HTML',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'CSS',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'Vue',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'React',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达waed是",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                },
                {
                    title: "阿萨达是123123",
                    content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                    time: '2018-05-03:00:00:00',
                    type: 'JavaScript',
                }
            ];
            let pathname = this.navArr.find(e => {return e.path.indexOf(this.location.pathname) > -1}).name;
            let newArr = [];
            if (pathname !== '所有') {
                newArr = arr.filter(e => {
                    return e.type === pathname
                });
            } else {
                newArr = arr;
            }
            dispatch(blogContent(newArr))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
