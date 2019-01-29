import React, {Component} from 'react';
import Header from '../../components/header';
import Nav from '../../components/nav';
import NotFound from '../../components/notFount';
import './../../assets/common.css'
import routerConfig from './../../routerConfig'
import {connect} from 'react-redux';
import {isShowNav} from './../../store/actions.js'

class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            navArr: [],
        }
    }

    render() {
        return (
            <div>
                <Header/>
                {routerConfig.map((item, key) => {
                    if (Array.isArray(item.children) && item.children.length > 0) {
                        if (this.props.location.pathname.indexOf(item.path) > -1) {
                            return (
                                <Nav key={key} isShow={this.state.isShow} navArr={item.children} {...this.props}/>
                            )
                        }
                    }
                    return null
                })}
                {(this.props.match.path === '*' && this.props.match.url !== '/') ?
                    <NotFound {...this.props}/> : <div className="main-container">{this.props.children}</div>
                }
            </div>
        );
    }

    componentWillMount() {
        window.addEventListener("scroll", this.props.getScrollHeight);
        routerConfig.forEach(e => {
            if (Array.isArray(e.children) && e.children.length > 0) {
                if (this.props.location.pathname.indexOf(e.path) > -1) {
                    this.setState({
                        navArr: e.children
                    }, function () {
                    })
                }
            }
        });
    }

    componentDidMount() {
        this.props.getScrollHeight()
    }
}

function mapGetState(state) {
    return state
}

function mapDispatchState(dispatch) {
    return {
        getScrollHeight() {
            dispatch(isShowNav(window.scrollY <= 60))
        },
    }
}

export default connect(mapGetState, mapDispatchState)(BasicLayout)