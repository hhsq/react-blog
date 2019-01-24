import React, { Component } from 'react';
import HomeContent from './homeContent/homeContent'
import './../../assets/common.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <HomeContent/>
            </div>
        );
    }
}
