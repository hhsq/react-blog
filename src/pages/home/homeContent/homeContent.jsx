import React,{Component} from 'react'
import './../home.css'

export default class HomeContent extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let arr = [
            {
                title: "从标准原理出发理解 JavaScript 数值精度",
                content: "从标准原理出从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解发理解从标准原理出发理解从标准原理出发理解从标准原理出发理解",
                time: '2018-05-03:00:00:00',
                type: 'JavaScript',
            },{
                title: "阿萨达是",
                content: "斯蒂芬是否水电费水电费付付付付付付付付付付付付付付付付付付付付付付付付付付人生态度如同太阳镜",
                time: '2018-05-03:00:00:00',
                type: 'JavaScript',
            }
        ];
        return(
            <div className="homeContent">
                {arr.length > 0 && arr.map((item,key) => {
                    return(
                        <div className="contentItem" key={key}>
                            <p className="article-title">{item.title}</p>
                            <p className="article-cont">{item.content}</p>
                            <p className="article-other">
                                <span>{item.time}</span>
                                <span>{item.type}</span>
                            </p>
                        </div>
                    )})
                }
            </div>
        )
    }
}