import React, { Component } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

class DayNightToggler extends Component {
    constructor(props) {
        super(props);
        const cookieMode = document.cookie.match('(^|;)\\s*mode\\s*=\\s*([^;]+)')?.pop() || ''
        if (cookieMode) {
            this.state = {
                isDarkMode: cookieMode === 'dark'
            }
            document.getElementById('root').className = cookieMode;
        }
        else {
            document.cookie = "mode=dark"
            this.state = {
                isDarkMode: true
            }
            document.getElementById('root').className = 'dark'
        }
        this.setIsDarkMode = this.setIsDarkMode.bind(this)
    }

    setIsDarkMode() {
        console.log('Hello')
        this.setState({
            isDarkMode: !this.state.isDarkMode
        }, () => {
            document.getElementById('root').className = this.state.isDarkMode ? 'dark' : 'light'
            document.cookie = "mode=" + (this.state.isDarkMode ? 'dark' : 'light')
        })
    }

    render() {
        return (
            <DarkModeToggle
                onChange={this.setIsDarkMode}
                checked={this.state.isDarkMode}
                className="day-night-toggle"
            />
        );
    }
}

export default DayNightToggler;