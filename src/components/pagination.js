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
                { path: '#home', icon: "fas fa-home", title: 'Home' },
                { path: '#about', icon: "fas fa-address-card", title: 'About' },
                { path: '#experience', icon: "fas fa-briefcase", title: 'Experience' },
                { path: '#projects', icon: "fas fa-folder-open", title: 'Projects' },
                { path: '#contact', icon: "fas fa-phone-square-alt", title: 'Contact' }
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
                        <span className='span-item-default display-flex' style={{ transitionDelay: `${index * 100}ms` }}>
                            <a href={icon.path} title={icon.title}>
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