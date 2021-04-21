import React, { Component } from 'react';
import {
    isDesktop
} from "react-device-detect";
import Fade from 'react-reveal/Fade';

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
                    <Fade right={isDesktop ? true : false} up={isDesktop ? false : true} when={this.state.isMounted} delay={index * 100}>
                        <span className='display-flex'>
                            <a href={icon.path} title={icon.title}>
                                <i id={index} className={icon.icon}></i>
                            </a>
                        </span>
                    </Fade>
                </li>)
        }</ul>;

        return pagination;
    }
}

export default Pagination;