import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextLoop from "react-text-loop";
import { useState, useEffect } from 'react';
import profilePicDark from "../../img/profile-mobile-darkBG.jpg";
import profilePicLight from "../../img/profile-mobile-lightBG.jpg";
import Fade from 'react-reveal/Fade';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazy-load';

const HomeMobile = ({ show, delay = 500, isDarkMode }) => {
    const [isMounted, setIsMounted] = useState(show);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(show), delay);
        return () => clearTimeout(timeout);
    }, [show, delay]);
    const one = <h3>Hi,</h3>;
    const two = <h3>I am Prayuj Pillai!</h3>
    const three = <h3>I am a Software Engineer and</h3>
    const four = <h3><TextLoop interval={1000}>
        <span>a Tech Enthusiast. </span>
        <span>a Professional Sleeper. </span>
        <span>a Web Developer. </span>
        <span>an Accomplished TV watcher. </span>
        <span>a Full Stack Developer. </span>
    </TextLoop></h3>

    const items = [one, two, three, four]
    return (
        <Container className="main-container h-100 mobile">
            <Row className="justify-content-center align-items-center flex-direction-column">
                {isMounted ? <Col className="display-flex home-page-mobile flex-direction-column justify-content-center align-items-center">
                    {isDarkMode ?
                        <Fade>
                            <LazyLoad width="100%">
                                <img src={profilePicDark} alt="Profile for Dark Mode" id="profile-pic-mobile" />
                            </LazyLoad>
                        </Fade> :
                        <Fade>
                            <LazyLoad width="100%">
                                <img src={profilePicLight} alt="Profile for Light Mode" id="profile-pic-mobile" />
                            </LazyLoad>
                        </Fade>}
                </Col> : ''}
                <Col className="display-flex home-page-mobile flex-direction-column justify-content-center">
                    {isMounted &&
                        items.map((item, i) => (
                            <Fade bottom delay={i * 100}>
                                <div>{item}</div>
                            </Fade>
                        ))}
                </Col>
                {isMounted ?
                    <Fade bottom delay={500}><Col className="display-flex home-page-mobile flex-direction-column justify-content-center align-items-center" style={{ transitionDelay: `600ms` }} >
                        <span href="#" className="cursor-pointer accent-style align-self-center blink_me" onClick={() => {
                            if (window.fullpage_api.moveSectionDown) {
                                window.fullpage_api.moveSectionDown()
                            }
                        }
                        }><h3><i className="fas fa-chevron-up"></i></h3></span>
                    </Col></Fade> : ''
                }
            </Row>
        </Container >
    );
}

export default HomeMobile;