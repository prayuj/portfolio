import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextLoop from "react-text-loop";
import profilePic from "../../img/profile.png"
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';

const HomeDesktop = () => {
    const [isMounted, updateIsMounted] = useState(false);
    useEffect(() => {
        updateIsMounted(true)
    })
    return (
        <Container className="main-container h-100 desktop">
            <CSSTransition in={isMounted} classNames='home-row' timeout={1500}>
                <Row className="h-100 justify-content-center align-items-center home-row-default">
                    <Col className="display-flex home-page-desktop flex-direction-column">
                        <h3>Hi,</h3>
                        <h3>I am <span className="underline-style">Prayuj Pillai!</span></h3>
                        <h3>I am a Software Engineer and</h3>
                        <h3><TextLoop springConfig={{ stiffness: 340, damping: 30 }}>
                            <span>a Professional Sleeper</span>
                            <span>a Certified Foodie</span>
                            <span>an Accomplished TV watcher</span>
                        </TextLoop></h3>
                        <span href="#" className="cursor-pointer accent-style align-self-center blink_me" onClick={() => {
                            if (window.fullpage_api.moveSectionDown) {
                                window.fullpage_api.moveSectionDown()
                            }
                        }
                        }><h3><i class="fas fa-chevron-down"></i></h3></span>
                    </Col>
                    <Col className="display-flex home-page-desktop">
                        <img src={profilePic} id="profile-pic-desktop"></img>
                    </Col>
                </Row>
            </CSSTransition>
        </Container >);
}

export default HomeDesktop;