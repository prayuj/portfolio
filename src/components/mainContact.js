import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';
const Contact = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 2000);
        return () => clearTimeout(timeout);
    }, []);

    const timeout = 2000;

    return (<Container className="main-container h-100 desktop">
        <Row className="h-100 justify-content-center align-items-center">
            <TransitionGroup component={null}>
                {isMounted && <CSSTransition key={0} classNames="fadeup" timeout={timeout}>
                    <Col className="display-flex justify-content-center align-items-center flex-direction-column">
                        <h1><span className="underline-style">Connect with me:</span></h1>
                    </Col></CSSTransition>}
            </TransitionGroup>

        </Row>
    </Container>);
}

export default Contact;