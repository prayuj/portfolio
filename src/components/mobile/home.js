import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextLoop from "react-text-loop";
import profilePic from "../../img/profile-mobile.png"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

const HomeMobile = ({ show, delay = 500 }) => {
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

    const items = [one, two, three, four]
    return (
        <Container className="main-container h-100 mobile">
            <Row className="justify-content-center align-items-center flex-direction-column">
                <Col className="display-flex home-page-mobile flex-direction-column justify-content-center align-items-center">
                    <TransitionGroup component={null}>
                        {isMounted ?
                            <CSSTransition classNames="fadeup" timeout={timeout}>
                                <img src={profilePic} id="profile-pic-mobile" />
                            </CSSTransition> : ''
                        }

                    </TransitionGroup>
                </Col>
                <Col className="display-flex home-page-mobile flex-direction-column justify-content-center">
                    <TransitionGroup component={null}>
                        {isMounted &&
                            items.map((item, i) => (
                                <CSSTransition key={i} classNames="fadeup" timeout={timeout}>
                                    <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                                </CSSTransition>
                            ))}
                    </TransitionGroup>
                </Col>

                <TransitionGroup component={null}>
                    {isMounted ? <CSSTransition classNames="fadeup" timeout={timeout}>
                        <Col className="display-flex home-page-mobile flex-direction-column justify-content-center align-items-center" style={{ transitionDelay: `600ms` }} >
                            <span href="#" className="cursor-pointer accent-style align-self-center blink_me" onClick={() => {
                                if (window.fullpage_api.moveSectionDown) {
                                    window.fullpage_api.moveSectionDown()
                                }
                            }
                            }><h3><i class="fas fa-chevron-up"></i></h3></span>
                        </Col></CSSTransition> : ''
                    }

                </TransitionGroup>


            </Row>
        </Container >
    );
}

export default HomeMobile;