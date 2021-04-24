import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextLoop from "react-text-loop";
import profilePicDark from "../../img/profile-darkBG.jpg";
import profilePicLight from "../../img/profile-lightBG.jpg";
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HomeDesktop = ({ show, delay = 500, isDarkMode }) => {
    const [isMounted, setIsMounted] = useState(show);
    useEffect(() => {
        const timeoutOne = setTimeout(() => {
            setIsMounted(show)
        }, delay);
        return () => clearTimeout(timeoutOne);
    }, [show, delay]);

    const one = <h3>Hi,</h3>;
    const two = <h3>I am Prayuj Pillai!</h3>
    const three = <h3>I am a Software Engineer and </h3>
    const four = <h3><TextLoop interval={1000}>
        <span>a Tech Enthusiast. </span>
        <span>a Professional Sleeper. </span>
        <span>a Web Developer. </span>
        <span>an Accomplished TV watcher. </span>
        <span>a Full Stack Developer. </span>
    </TextLoop></h3>
    const five = <span href="#" className="accent-style display-flex justify-content-center blink_me">
        <a href="#about">
            <h3><i className="fas fa-chevron-up"></i></h3>
        </a>
    </span>

    const items = [one, two, three, four, five]

    return (
        <Container className="main-container h-100 desktop">
            <Row className="h-100 justify-content-center align-items-center home-row-default">
                <Col className="display-flex home-page-desktop flex-direction-column">
                    {isMounted &&
                        items.map((item, i) => (
                            <Fade bottom delay={i * 100} key={i}>
                                <div>{item}</div>
                            </Fade>
                        ))}
                </Col>
                {isMounted && <Col className="display-flex home-page-desktop align-items-center">
                    {isDarkMode ?
                        <Zoom>
                            <LazyLoadImage
                                src={profilePicDark}
                                alt="Profile for Dark Mode"
                                id="profile-pic-desktop"
                                effect="blur"
                                height="100%"
                            />
                        </Zoom> :
                        <Zoom>
                            <LazyLoadImage
                                src={profilePicLight}
                                alt="Profile for Light Mode"
                                id="profile-pic-desktop"
                                effect="blur"
                                height="100%"
                            />
                        </Zoom>
                    }
                </Col>}
            </Row>
        </Container >);
}

export default HomeDesktop;