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
            <div>
                <div className="contentItem" onClick={this.seeInfo}>
                    <p className="article-title">{this.props.contItem.title}</p>
                    <p className="article-cont">{this.props.contItem.content}</p>
                    <p className="article-other">
                        <span>{this.props.contItem.time}</span>
                        <span>{this.props.contItem.type}</span>
                    </p>
                </div>
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