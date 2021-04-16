import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextLoop from "react-text-loop";
import profilePic from "../../img/profile.png"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

const HomeDesktop = ({ show, delay = 500 }) => {
    const [isMounted, setIsMounted] = useState(show);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(show), delay);
        return () => clearTimeout(timeout);
    }, [show]);

    const timeout = 2000;

    const one = <h3>Hi,</h3>;
    const two = <h3>I am <span className="underline-style">Prayuj Pillai!</span></h3>
    const three = <h3>I am a Software Engineer and</h3>
    const four = <h3><TextLoop springConfig={{ stiffness: 340, damping: 30 }}>
        <span>a Professional Sleeper</span>
        <span>a Certified Foodie</span>
        <span>an Accomplished TV watcher</span>
    </TextLoop></h3>
    const five = <span href="#" className="accent-style display-flex justify-content-center blink_me">
        <a href="#about">
            <h3><i class="fas fa-chevron-up"></i></h3>
        </a>
    </span>

    const items = [one, two, three, four, five]

    return (
        <Container className="main-container h-100 desktop">
            <Row className="h-100 justify-content-center align-items-center home-row-default">
                <Col className="display-flex home-page-desktop flex-direction-column">
                    <TransitionGroup component={null}>
                        {isMounted &&
                            items.map((item, i) => (
                                <CSSTransition key={i} classNames="fadeup" timeout={timeout}>
                                    <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                                </CSSTransition>
                            ))}
                    </TransitionGroup>
                </Col>
                <Col className="display-flex home-page-desktop">
                    <TransitionGroup component={null}>
                        {isMounted ?
                            <CSSTransition classNames="fadeup" timeout={timeout}>
                                <div style={{ transitionDelay: '600ms' }}>
                                    <img src={profilePic} id="profile-pic-desktop" />
                                </div>
                            </CSSTransition> : ''
                        }
                    </TransitionGroup>
                </Col>
            </Row>
        </Container >);
}

export default HomeDesktop;