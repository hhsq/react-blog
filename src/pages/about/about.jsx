import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import './../../assets/common.css'
import './about.css'

class about extends Component {
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

                            <h3 className="link-hover" onClick={this.openLink.bind(this,"https://github.com/huang0318")}>
                                伴宠<i className="iconfont icon-icon-"> </i>
                            </h3>
                            <ul className="pro-introduction">
                                <li><b>项目简介</b>:这是一个寄养宠物的平台</li>
                                <li><b>负责内容</b>:用户管理，社区管理与宠物管理</li>
                                <li><b>开发时间</b>:2017.08-2017.12</li>
                                <li><b>技术栈</b>:基于Vue-cli2.v的Vue2.v全家桶,Axios,element-ui2.v(中途升版)</li>
                            </ul>

                            <h3 className="link-hover" onClick={this.openLink.bind(this,"https://github.com/huang0318")}>
                                VPN后台管理系统<i className="iconfont icon-icon-"> </i>
                            </h3>
                            <ul className="pro-introduction">
                                <li><b>项目简介</b>:这是一个管理VPN用户以及VPN流量的后台管理系统</li>
                                <li><b>负责内容</b>:负责前端所有</li>
                                <li><b>开发时间</b>:2018.01-2018.01</li>
                                <li><b>技术栈</b>:基于Vue-cli2.v的Vue2.v全家桶,Axios,element-ui2.v,Less</li>
                            </ul>

                            <h3 className="link-hover" onClick={this.openLink.bind(this,"http://web.cmnt.cn/index.html")}>
                                中疗智用web端单医院<i className="iconfont icon-icon-"> </i>
                            </h3>
                            <ul className="pro-introduction">
                                <li><b>项目简介</b>: 中疗智用医学继续教育平台的电脑端,中疗智用一个专业的医学继续教育和交流综合服务平台</li>
                                <li><b>开发时间</b>: 2018.04-2018.06</li>
                                <li><b>技术栈</b>: jQuery,bootstrap,Ajax,Echarts</li>
                            </ul>

                            <h3 className="link-hover" onClick={this.openLink.bind(this,"http://test.cmnt.cn:9090/#/")}>
                                四川省卫生健康委员会继续医学教育管理服务平台<i className="iconfont icon-icon-"> </i>
                            </h3>
                            <ul className="pro-introduction">
                                <li><b>项目简介</b>:继续医学教育管理服务平台</li>
                                <li><b>负责内容</b>:负责前端所有</li>
                                <li><b>开发时间</b>: 2018.04-2018.09(第一版),2018.10-2018.10(第二版),2018.11-2018.12(第三版)</li>
                                <li><b>技术栈</b>: 基于Vue-cli2.v的Vue2.v全家桶,Axios,element-ui2.v,Echarts</li>
                                {/*<li>项目链接:*/}
                                    {/*<span onClick={this.openLink.bind(this,"http://test.cmnt.cn:9090/#/")}>点我查看(测试版)</span>*/}
                                    {/*<span onClick={this.openLink.bind(this,"http://deyang.scws.org.cn:9001/")}>点我查看(德阳环境)</span>*/}
                                {/*</li>*/}
                            </ul>

                            <h3 className="link-hover" onClick={this.openLink.bind(this,"http://test.cmnt.cn:9005/login.html")}>
                                泸州市继续医学教育管理服务平台<i className="iconfont icon-icon-"> </i>
                            </h3>
                            <ul className="pro-introduction">
                                <li><b>项目简介</b>: 泸州市继续医学教育管理服务平台</li>
                                <li><b>负责内容</b>: 问卷调查</li>
                                <li><b>开发时间</b>: 2018.11-2018.11</li>
                                <li><b>技术栈</b>: jQuery,Bootstrap,jQuery-valid,Ajax,Echarts</li>
                            </ul>

                            <h3 className="link-hover">中疗智用手机APP内置继教管理移动端适配<i className="iconfont icon-icon-"> </i></h3>
                            <ul className="pro-introduction">
                                <li><b>项目简介</b>: 中疗智用手机APP继续教育模块</li>
                                <li><b>负责内容</b>: 所有前端内容(项目管理及审核,项目计划管理及审核)</li>
                                <li><b>开发时间</b>: 2018.12-2018.12</li>
                                <li><b>技术栈</b>: 基于Vue-cli3.v的Vue2.v全家桶,Axios,Vant,使用Flex布局方式</li>
                                <li><b>项目链接</b>: 中疗智用APP继教管理模块</li>
                            </ul>

                            <h3 className="link-hover" onClick={this.openLink.bind(this,"https://github.com/huang0318")}>
                                博客<i className="iconfont icon-icon-"> </i>
                            </h3>
                            <ul className="pro-introduction">
                                <li><b>项目简介</b>:一个博客,也是我在网络上的一个小屋，记录着我的编程经验和生活</li>
                                <li><b>开发时间</b>:2019.01-2019.01</li>
                                <li><b>技术栈</b>: React,Redux</li>
                                <li><b>项目链接</b>:暂未上线</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    openLink(url) {
        window.open(url)
    }
}
export default withRouter(about)