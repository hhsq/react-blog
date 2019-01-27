import React, {Component} from 'react';
import './../../assets/common.css'
import './about.css'

export default class about extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="about-container">
                    <div className="about-warp">
                        <div>
                            <p className="about-title">关于我</p>
                            <p className="center">
                                <b>Welcome to my home</b>
                            </p>
                        </div>
                        <div className="about-content">
                            <h2>我的简历</h2>
                            <p>
                                我叫黄思权,1997年的老腊肉<br/>
                                2018年6月毕业于四川工商职业技术学院，软件技术专业<br/>
                                从事前端开发近两年时间<br/>
                                曾就职于成都令鹿科技,四川中疗网络科技有限公司<br/>
                            </p>
                            <h4>技术栈</h4>
                            <ul>
                                <li>JavaScript</li>
                                <li>Vue</li>
                                <li>React</li>
                                <li>HTML/CSS</li>
                                <li>node的express</li>
                                <li>MySQL</li>
                            </ul>
                            <h4>兴趣爱好</h4>
                            <ul>
                                <li>LOL,吃鸡</li>
                                <li>骑车</li>
                                <li>羽毛球</li>
                                <li>乒乓球</li>
                                <li>打牌</li>
                                <li>睡觉</li>
                                <li>学习</li>
                                <li>...</li>
                            </ul>
                            <h2>关于项目</h2>
                            <h4>伴宠</h4>
                            <ul>
                                <li>项目简介:</li>
                                <li>项目内容:</li>
                                <li>开发时间:</li>
                                <li>技术栈:</li>
                            </ul>

                            <h4>VPN后台管理系统</h4>
                            <ul>
                                <li>项目简介:</li>
                                <li>项目内容:</li>
                                <li>开发时间:</li>
                                <li>技术栈:</li>
                            </ul>

                            <h4>中疗智用web端</h4>
                            <ul>
                                <li>项目简介:</li>
                                <li>开发时间:</li>
                                <li>技术栈:</li>
                            </ul>

                            <h4>四川省卫生健康委员会继续医学教育管理服务平台</h4>
                            <ul>
                                <li>项目简介:</li>
                                <li>开发时间:</li>
                                <li>技术栈:</li>
                            </ul>

                            <h4>泸州市继续医学教育管理服务平台</h4>
                            <ul>
                                <li>项目简介:</li>
                                <li>开发时间:</li>
                                <li>技术栈:</li>
                            </ul>

                            <h4>中疗智用手机APP内置继教管理h5</h4>
                            <ul>
                                <li>项目简介:</li>
                                <li>开发时间:</li>
                                <li>技术栈:</li>
                            </ul>

                            <h4>博客</h4>
                            <ul>
                                <li>项目简介:</li>
                                <li>开发时间:</li>
                                <li>技术栈:</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
