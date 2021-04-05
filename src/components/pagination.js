import React, { Component } from 'react';
import {
    isDesktop
} from "react-device-detect";

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: [
                "fas fa-home",
                "fas fa-address-card",
                "fas fa-briefcase",
                "fas fa-folder-open",
                "fas fa-phone-square-alt"
            ],
        }
    }
    render() {
        const pagination = <ul className={isDesktop ? "pagination-desktop" : "pagination-mobile"} onClick={e => {
            if (!isNaN(parseInt(e.target.id))) { this.props.handleIconClick(parseInt(e.target.id)) }
        }}>{
                this.state.icons.map((icon, index) => <li id={index} key={index} className={this.props.currentPage === index ? 'active' : ''}>
                    <i id={index} className={icon}></i>
                </li>)
            }</ul>;

        return pagination;
    }
}

export default Pagination;