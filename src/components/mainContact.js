import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
const Contact = ({ show, delay = 500 }) => {
    const [isMounted, setIsMounted] = useState(show);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(show), delay);
        return () => clearTimeout(timeout);
    }, [show]);

    const timeout = 2000;

    return (<Container className="main-container h-100 desktop">
        <Row className="h-100 justify-content-center align-items-center">
            <Fade bottom in={isMounted} delay={200}>
                <Col className="display-flex justify-content-center align-items-center flex-direction-column">
                    <h1><span className="underline-style">Connect with me:</span></h1>
                </Col>
            </Fade>
        </Row>
    </Container>);
}

export default Contact;