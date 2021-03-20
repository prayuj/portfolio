import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (<Container className="footer">
        <Row>
            <Col>
                <a href="https://www.linkedin.com/in/prayuj/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            </Col>
            <Col>
                <a href="https://github.com/prayuj" target="_blank"><i class="fab fa-github"></i></a>
            </Col>
            <Col>
                <a href="mailto:prayuj@gmail.com" target="_blank"><i class="far fa-envelope"></i></a>
            </Col>
        </Row>
    </Container>);
}

export default Footer;