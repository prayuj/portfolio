import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextLoop from "react-text-loop";
import profilePicDark from "../../img/profile-darkBG.jpg";
import profilePicLight from "../../img/profile-lightBG.jpg";
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const HomeDesktop = ({ show, delay = 500, isDarkMode }) => {
    const [isMounted, setIsMounted] = useState(show);
    const [duration, setDuration] = useState(500);
    useEffect(() => {
        const timeoutOne = setTimeout(() => {
            setIsMounted(show)
        }, delay);
        return () => clearTimeout(timeoutOne);
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
                    {isMounted &&
                        items.map((item, i) => (
                            <Fade bottom delay={i * 100}>
                                <div>{item}</div>
                            </Fade>
                        ))}
                </Col>
                <Col className="display-flex home-page-desktop">
                    <div>
                        <Zoom duration={duration} when={isDarkMode && isMounted} collapse><img src={profilePicDark} id="profile-pic-desktop" /></Zoom>
                        <Zoom duration={duration} when={!isDarkMode && isMounted} collapse><img src={profilePicLight} id="profile-pic-desktop" /></Zoom>
                    </div>

                </Col>
            </Row>
        </Container >);
}

export default HomeDesktop;