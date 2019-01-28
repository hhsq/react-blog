import React, {Component} from 'react';
import HomeContent from './../home/homeContent/homeContent'
import './search.css'
import './../../assets/common.css'
import './../home/home.css'

export default class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            searchList: []
        }
    }
    render() {
        return (
            <div className="container">
                <div className="search-content">
                    <div className="search-input">
                        <input type="text" placeholder="请输入关键字进行搜索" onChange={this.searchData} value={this.state.message} onKeyDown={this.setKeyDown}/>
                    </div>
                    <div className="search-data">
                        {this.state.searchList.length === 0 && <p className="center">暂无数据</p>}
                        {this.state.searchList.map((item,key) => {
                            return(
                                <HomeContent key={key} contItem={item}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
    componentWillMount() {

    }
    setKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.getData()
        }
    };
    searchData = (e) => {
        this.setState({
            message: e.target.value
        })
    };
    getData = () => {
        let arr = [
            {
                title: "测试搜索第一",
                content: "从标准原理出从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解",
                time: '2018-05-03:00:00:00',
                type: 'JavaScript',
            },
            {
                title: "测试搜索第二",
                content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                time: '2018-05-03:00:00:00',
                type: 'React',
            },
            {
                title: "测试搜索第三",
                content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                time: '2018-05-03:00:00:00',
                type: 'HTML',
            },
        ];
        // 掉接口
        if (this.state.message.length === 0) return;
        this.setState({
            searchList: arr.filter(e => {
                return e.title.indexOf(this.state.message) > -1
            })
        },function () {
        })
    }
}
