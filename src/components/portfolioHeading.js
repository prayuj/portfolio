import {
    isDesktop
} from "react-device-detect";
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import '../css/heading.css'

const Heading = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 1000);
        return () => clearTimeout(timeout);
    }, []);
    const style = {
        color: 'inherit',
        textDecoration: 'none'
    }
    if (isDesktop) {
        return (
            <Fade left in={isMounted}>
                <div className="portfolio-heading">
                    <a className="display-flex" style={style} href='/#home'>
                        <span>
                            <h2>prayuj</h2>
                        </span>
                        <span className="accent-style">
                            <h2>.tech</h2>
                        </span>
                    </a>
                </div>
            </Fade>)
    }
    return (<></>);
}

export default Heading;