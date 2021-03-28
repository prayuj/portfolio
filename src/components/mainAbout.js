import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return (
        <>
            <div className="experience-heading display-flex justify-content-center align-items-center"><h1>About me</h1></div>
            <Container className="h-100">
                <Row className="h-100 justify-content-center align-items-center">
                    <Col className="display-flex flex-direction-column">
                        <p>Hello! My name is Prayuj and I am a Software Engineer based in Mumbai and I enjoy Full Stack Development
                        with more empahsis on backend systems (which is pretty evident from the design of this website 😅).</p>
                        <p>I currently work at <a href="https://cimpress.com/">Cimpress</a> as part of their Business subsidiary, <a href="https://www.pens.com/ie/">National Pen.</a></p>
                        <p>Here are a few technologies I am proficient in:</p>
                        <ul className="display-flex">
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
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default About;