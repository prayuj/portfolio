import React, { Component } from 'react';
import {
    isDesktop
} from "react-device-detect";
import { CSSTransition } from 'react-transition-group';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: [
                { path: '#home', icon: "fas fa-home" },
                { path: '#about', icon: "fas fa-address-card" },
                { path: '#experience', icon: "fas fa-briefcase" },
                { path: '#projects', icon: "fas fa-folder-open" },
                { path: '#contact', icon: "fas fa-phone-square-alt" }
            ],
            isMounted: false
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isMounted: true }), 500)
    }

    render() {
        const pagination = <ul className={isDesktop ? "pagination-desktop" : "pagination-mobile"}>{
            this.state.icons.map((icon, index) =>
                <li id={index} key={index} className={this.props.currentPage === index ? 'active' : ''}>
                    <CSSTransition in={this.state.isMounted} classNames='span-item'>
                        <span className='span-item-default' style={{ transitionDelay: `${index * 100}ms` }}>
                            <a href={icon.path}>
                                <i id={index} className={icon.icon}></i>
                            </a>
                        </span>
                    </CSSTransition>
                </li>)
        }</ul>;

        return pagination;
    }
}

export default Pagination;