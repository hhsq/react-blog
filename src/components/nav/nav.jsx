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
            <div className={`top-view ${this.props.isShow?"":"top"}`}>
                <nav>
                    <ul className="nav-list">
                        {
                             this.props.navArr.map((item, key) => {
                                return (
                                    <li onClick={this.props.switchType} className={`nav-item ${this.props.location.pathname === item.path? "active":""}`} key={key}>
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
    componentWillMount() {
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
            dispatch(blogContent([
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
            ]))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
