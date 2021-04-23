import React from 'react';
import {
    isMobileOnly,
    isDesktop
} from "react-device-detect";
import HomeDesktop from './desktop/home'
import HomeMobile from './mobile/home'
import '../css/home.css';

const Home = ({ show, isDarkMode }) => {
    if (isDesktop)
        return (<HomeDesktop show={show} isDarkMode={isDarkMode} />);
    else if (isMobileOnly) {
        return (<HomeMobile show={show} isDarkMode={isDarkMode} />);
    }
}

function areEqual(prevProps, nextProps) {
    return prevProps.isDarkMode !== nextProps.isDarkMode;
}

export default React.memo(Home, areEqual);