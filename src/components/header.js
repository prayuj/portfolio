import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            expanded: false
        }
    }
    handleClick(e) {
        this.props.onClickHandler(parseInt(e.target.id))
        this.setState({ expanded: false })
    }
    state = {}
    render() {
        const toggleIcon = this.state.expanded ? <i className="fas fa-times"></i> : <i className="fas fa-align-justify"></i>
        return (
            <header className="header-navbar">
                <Navbar bg="dark" expand="md" expanded={this.state.expanded}>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => {
                        console.log('Hello')
                        this.setState({ expanded: !this.state.expanded })
                    }} >
                        {toggleIcon}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-right">
                        <Nav className="mr-auto">
                            <Nav.Link id="0" onClick={this.handleClick}>Home</Nav.Link>
                            <Nav.Link id="1" onClick={this.handleClick}>About</Nav.Link>
                            <Nav.Link id="2" onClick={this.handleClick}>Experience</Nav.Link>
                            <Nav.Link id="3" onClick={this.handleClick}>Education</Nav.Link>
                            <Nav.Link id="4" onClick={this.handleClick}>Hobbies</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            //         <div className="container-fluid">
            //             <a className="navbar-brand navbar-text" href="#">Navbar</a>
            //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //                 <span className="navbar-toggler-icon"></span>
            //             </button>
            //             <div className="collapse navbar-collapse justify-content-flex-end" id="navbarSupportedContent">
            //                 <ul className="navbar-nav">
            //                     <li className="nav-item">
            //                         <button className="nav-link active navbar-text button-acting-like-a" aria-current="page" href="#" onClick={this.handleClick} id='0'>Home</button>
            //                     </li>
            //                     <li className="nav-item">
            //                         <button className="nav-link active navbar-text button-acting-like-a" aria-current="page" href="#" onClick={this.handleClick} id='1'>About</button>
            //                     </li>
            //                     <li className="nav-item">
            //                         <button className="nav-link active navbar-text button-acting-like-a" aria-current="page" href="#" onClick={this.handleClick} id='2'>Experience</button>
            //                     </li>
            //                     <li className="nav-item">
            //                         <button className="nav-link active navbar-text button-acting-like-a" aria-current="page" href="#" onClick={this.handleClick} id='3'>Education</button>
            //                     </li>
            //                     <li className="nav-item">
            //                         <button className="nav-link active navbar-text button-acting-like-a" aria-current="page" href="#" onClick={this.handleClick} id='4'>Hobbies</button>
            //                     </li>
            //                 </ul>
            //             </div>
            //         </div>
            //     </nav>
        )
    }
}

export default Header