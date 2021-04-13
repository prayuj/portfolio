import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';

const About = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 2000);
        return () => clearTimeout(timeout);
    }, []);

    const timeout = 2000;

    const one = <h1><span className="underline-style">About me</span></h1>
    const two = <p>Hello! My name is Prayuj and I am a Software Engineer based in Mumbai and I enjoy Full Stack Development
    with more empahsis on backend systems (which is pretty evident from the design of this website 😅).</p>
    const three = <p>I currently work at <a href="https://cimpress.com/">Cimpress</a> as part of their Business subsidiary, <a href="https://www.pens.com/ie/">National Pen.</a></p>
    const four = <p>Here are a few technologies I am proficient in:</p>
    const five = <ul className="display-flex">
        <div className="display-flex flex-direction-column tech-list-items">
            <li>JavaScript</li>
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>MongoDB</li>
        </div>
        <div className="display-flex flex-direction-column tech-list-items">
            <li>Flask</li>
            <li>jQuery</li>
            <li>Java</li>
            <li>HTML/CSS</li>
        </div>
    </ul>

    const items = [one, two, three, four, five]

    return (
        <Container className="h-100">
            <Row className="h-100 justify-content-center align-items-center">
                <Col className="display-flex flex-direction-column">
                    <TransitionGroup component={null}>
                        {isMounted &&
                            items.map((item, i) => (
                                <CSSTransition key={i} classNames="fadeup" timeout={timeout}>
                                    <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                                </CSSTransition>
                            ))}
                    </TransitionGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default About;