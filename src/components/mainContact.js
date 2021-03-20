import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Contact extends Component {
    render() {
        return (<Container className="main-container h-100 desktop">
            <Row className="h-100 justify-content-center align-items-center">
                <Col className="connect">
                    <h1>Connect with me:</h1>
                </Col>
            </Row>
        </Container>);

    }
}

export default Contact;