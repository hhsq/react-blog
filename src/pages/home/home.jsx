import React, { Component } from 'react';
import HomeContent from './homeContent/homeContent'
import './../../assets/common.css'
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="homeContent">
                    {this.props.blogContent.navArr.length > 0 && this.props.blogContent.navArr.map((item,key) => {
                        return (
                            <HomeContent contItem={item} key={key}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps)(withRouter(Home));
