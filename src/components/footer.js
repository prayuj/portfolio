import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (<Container className="footer">
        <Row>
            <Col>
                <a href="https://www.linkedin.com/in/prayuj/"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/prayuj"><i class="fab fa-github"></i></a>
            </Col>
        </Row>
    </Container>);
}

export default Footer;