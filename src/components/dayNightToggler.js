import React, { Component } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import {
    isMobileOnly,
    isDesktop
} from "react-device-detect";
import Fade from 'react-reveal/Fade';
import '../css/toggler.css';

class DayNightToggler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMounted: false
        }
    }

    componentDidMount() {
        const timeout = setTimeout(() => this.setState({ isMounted: true }), 1400);
        return () => clearTimeout(timeout);
    }

    render() {
        if (isDesktop)
            return (
                <Fade when={this.state.isMounted} right>
                    <div className='day-night-toggle'>
                        <DarkModeToggle
                            onChange={this.props.setIsDarkMode}
                            checked={this.props.isDarkMode}
                        /></div>
                </Fade>
            );
        else if (isMobileOnly) {
            return (
                <Fade when={this.state.isMounted} right>
                    <div className='day-night-toggle-mobile'>
                        <DarkModeToggle
                            onChange={this.props.setIsDarkMode}
                            checked={this.props.isDarkMode}
                            size={60}
                        /></div>
                </Fade>
            )
        }
        else {
            <></>
        }
    }
}

export default DayNightToggler;