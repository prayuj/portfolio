import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import '../css/about.css';

const About = ({ show, delay = 500 }) => {
    const [isMounted, setIsMounted] = useState(show);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(show), delay);
        return () => clearTimeout(timeout);
    }, [show, delay]);

    const liItems = ['JavaScript', 'NodeJS', 'ReactJS', 'MongoDB', 'Flask', 'jQuery', 'Java', 'HTML/CSS']

    const one = <span className="display-flex align-items-center"><h2><span className="accent-style index">[1]</span></h2><h1>About me</h1></span>
    const two = <p>Hello! My name is Prayuj and I am a Software Engineer based in Mumbai and I enjoy Full Stack Development
    with more empahsis on backend systems (which is pretty evident from the design of this website 😅).</p>
    const three = <p>I currently work at <a href="https://cimpress.com/">Cimpress</a> as part of their Business subsidiary, <a href="https://www.pens.com/ie/">National Pen.</a></p>
    const four = <p>Here are a few technologies I am proficient in:</p>
    const items = [one, two, three, four]

    return (
        <Container className="h-100">
            <Row className="h-100 justify-content-center align-items-center">
                <Col className="display-flex flex-direction-column">
                    {items.map((item, i) => (
                        <Fade bottom in={isMounted} delay={i * 100} key={i}><div>{item}</div></Fade>

                    ))}
                    <ul className="technology-list">
                        {liItems.map((item, i) => (
                            <Fade bottom in={isMounted} delay={(i + 1) * 50 + 500} key={i}>
                                <li>{item}</li></Fade>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default About;