import React, { Component } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import {
    isMobileOnly,
    isDesktop
} from "react-device-detect";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class DayNightToggler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMounted: false
        }
        const cookieMode = document.cookie.match('(^|;)\\s*mode\\s*=\\s*([^;]+)')?.pop() || ''
        if (cookieMode) {
            this.state.isDarkMode = cookieMode === 'dark';
            document.getElementById('root').className = cookieMode;
        }
        else {
            document.cookie = "mode=dark"
            this.state.isDarkMode = true;
            document.getElementById('root').className = 'dark'
        }
        this.setIsDarkMode = this.setIsDarkMode.bind(this)
    }

    componentDidMount() {
        const timeout = setTimeout(() => this.setState({ isMounted: true }), 1400);
        return () => clearTimeout(timeout);
    }

    setIsDarkMode() {
        this.setState({
            isDarkMode: !this.state.isDarkMode
        }, () => {
            document.getElementById('root').className = this.state.isDarkMode ? 'dark' : 'light'
            document.cookie = "mode=" + (this.state.isDarkMode ? 'dark' : 'light')
        })
    }

    render() {
        if (isDesktop)
            return (
                <TransitionGroup component={null}>
                    {this.state.isMounted && <CSSTransition classNames='fadeup' timeout={1000}>
                        <DarkModeToggle
                            onChange={this.setIsDarkMode}
                            checked={this.state.isDarkMode}
                            className="day-night-toggle"
                        />
                    </CSSTransition>}
                </TransitionGroup>
            );
        else if (isMobileOnly) {
            return (<TransitionGroup component={null}>
                {this.state.isMounted && <CSSTransition classNames='fadeup' timeout={1000}>
                    <DarkModeToggle
                        onChange={this.setIsDarkMode}
                        checked={this.state.isDarkMode}
                        className="day-night-toggle-mobile"
                        size={60}
                    />
                </CSSTransition>}
            </TransitionGroup>
            )
        }
        else {
            <></>
        }
    }
}

export default DayNightToggler;