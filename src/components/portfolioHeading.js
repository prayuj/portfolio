import {
    isDesktop
} from "react-device-detect";
import { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Heading = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timeout);
    }, []);
    const style = {
        color: 'inherit',
        textDecoration: 'none'
    }
    if (isDesktop) {
        return (<TransitionGroup component={null}>
            {isMounted && <CSSTransition classNames='faderight' timeout={1000}>
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
            </CSSTransition>}
        </TransitionGroup>)
    }
    return (<></>);
}

export default Heading;