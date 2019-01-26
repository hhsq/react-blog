import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import HomeContent from './../../home/homeContent/homeContent'
import './../../home/home.css'
import './../archive.css'

class ArchiveCont extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div className="big-node">
                <p>{this.props.archiveItem.year}年</p>
                {this.props.archiveItem.content.map((item,key) => {
                    return(
                        <div key={key} className="big-node month">
                            <p>{item.month}月</p>
                            <div className="blog-content">
                                {item.content.map((i,j) => {
                                    return(
                                        <HomeContent key={j} contItem={i}/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default withRouter(ArchiveCont)