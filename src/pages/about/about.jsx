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

                </div>
            </div>
        )
    }
    openLink(url) {
        window.open(url)
    }
}
export default withRouter(about)