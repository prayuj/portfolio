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
    }

    componentDidMount() {
        const timeout = setTimeout(() => this.setState({ isMounted: true }), 1400);
        return () => clearTimeout(timeout);
    }

    render() {
        if (isDesktop)
            return (
                <TransitionGroup component={null}>
                    {this.state.isMounted && <CSSTransition classNames='fadeup' timeout={1000}>
                        <DarkModeToggle
                            onChange={this.props.setIsDarkMode}
                            checked={this.props.isDarkMode}
                            className="day-night-toggle"
                        />
                    </CSSTransition>}
                </TransitionGroup>
            );
        else if (isMobileOnly) {
            return (<TransitionGroup component={null}>
                {this.state.isMounted && <CSSTransition classNames='fadeup' timeout={1000}>
                    <DarkModeToggle
                        onChange={this.props.setIsDarkMode}
                        checked={this.props.isDarkMode}
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