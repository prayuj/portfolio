import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (<Container className="footer">
        <Row>
            <Col>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-github"></i>
            </Col>
        </Row>
    </Container>);
}

export default Footer;