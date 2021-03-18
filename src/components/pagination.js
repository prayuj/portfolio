import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<ul id="pagination" onClick={e => {
            if (!isNaN(parseInt(e.target.id))) { this.props.handleIconClick(parseInt(e.target.id)) }
        }}>
            <li id="0" className={this.props.currentPage === 0 ? 'active' : ''}><i id="0" class="fas fa-home"></i></li>
            <li id="1" className={this.props.currentPage === 1 ? 'active' : ''}><i id="1" class="fas fa-address-card"></i></li>
            <li id="2" className={this.props.currentPage === 2 ? 'active' : ''}><i id="2" class="fas fa-briefcase"></i></li>
            <li id="3" className={this.props.currentPage === 3 ? 'active' : ''}><i id="3" class="fas fa-user-graduate"></i></li>
            <li id="4" className={this.props.currentPage === 4 ? 'active' : ''}><i id="4" class="fas fa-table-tennis"></i></li>
        </ul>);
    }
}

export default Pagination;