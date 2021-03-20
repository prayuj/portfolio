import React, { Component } from 'react';
import {
    isMobileOnly,
    isTablet,
    isDesktop
} from "react-device-detect";

class Pagination extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (isDesktop) {
            return (
                <ul className="pagination-desktop" onClick={e => {
                    if (!isNaN(parseInt(e.target.id))) { this.props.handleIconClick(parseInt(e.target.id)) }
                }}>
                    <li id="0" className={this.props.currentPage === 0 ? 'active' : ''}><i id="0" class="fas fa-home"></i></li>
                    <li id="1" className={this.props.currentPage === 1 ? 'active' : ''}><i id="1" class="fas fa-address-card"></i></li>
                    <li id="2" className={this.props.currentPage === 2 ? 'active' : ''}><i id="2" class="fas fa-briefcase"></i></li>
                    <li id="3" className={this.props.currentPage === 3 ? 'active' : ''}><i id="3" class="fas fa-user-graduate"></i></li>
                    <li id="4" className={this.props.currentPage === 4 ? 'active' : ''}><i id="4" class="fas fa-table-tennis"></i></li>
                    <li id="5" className={this.props.currentPage === 5 ? 'active' : ''}><i id="5" class="fas fa-phone"></i></li>
                </ul>
            )
        }
        else if (isMobileOnly) {
            return (
                <ul className="pagination-mobile" onClick={e => {
                    if (!isNaN(parseInt(e.target.id))) { this.props.handleIconClick(parseInt(e.target.id)) }
                }}>
                    <li id="0" className={this.props.currentPage === 0 ? 'active' : ''}><i id="0" class="fas fa-home"></i></li>
                    <li id="1" className={this.props.currentPage === 1 ? 'active' : ''}><i id="1" class="fas fa-address-card"></i></li>
                    <li id="2" className={this.props.currentPage === 2 ? 'active' : ''}><i id="2" class="fas fa-briefcase"></i></li>
                    <li id="3" className={this.props.currentPage === 3 ? 'active' : ''}><i id="3" class="fas fa-user-graduate"></i></li>
                    <li id="4" className={this.props.currentPage === 4 ? 'active' : ''}><i id="4" class="fas fa-table-tennis"></i></li>
                    <li id="5" className={this.props.currentPage === 5 ? 'active' : ''}><i id="5" class="fas fa-phone"></i></li>
                </ul>)
        }
    }
}

export default Pagination;