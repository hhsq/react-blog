import React,{Component} from 'react';
import {withRouter} from "react-router-dom";
import './../home.css'
import { connect } from 'react-redux';

class HomeContent extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div className="homeContent">
                {this.props.blogContent.navArr.length > 0 && this.props.blogContent.navArr.map((item,key) => {
                    return(
                        <div className="contentItem" key={key} onClick={this.seeInfo}>
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
    seeInfo = () => {
        // this.props.history.push('/path')
    }
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps)(withRouter(HomeContent));