

import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './nav.css'
import './../../assets/common.css'

export default class nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }
    render() {
        return (
            <div className={`top-view ${this.props.isShow?"":"top"}`}>
                <nav>
                    <ul className="nav-list">
                        {
                            this.state.arr.length > 0 && this.state.arr.map((item, key) => {
                                return (
                                    <li className={`nav-item ${this.props.location.pathname === item.path? "active":""}`} key={key}>
                                        <Link to={item.path}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        )
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            arr: nextProps.navArr
        });
    }
}
