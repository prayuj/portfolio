import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { isDesktop } from 'react-device-detect';
import { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import '../css/footer.css';

const Footer = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 1400);
        return () => clearTimeout(timeout);
    }, []);

    const footerIcons = [
        {
            icon: 'fab fa-linkedin-in',
            link: 'http://urls.prayuj.tech/t/linkedin'
        },
        {
            icon: 'fab fa-github',
            link: 'http://urls.prayuj.tech/t/github'
        },
        {
            icon: 'far fa-envelope',
            link: 'mailto:prayuj@gmail.com'
        }
    ]

    return (
        <Container className={`footer ${isDesktop ? 'desktop-footer' : 'mobile-footer'}`}>
            <Row>
                {footerIcons.map((icon, i) => (
                    <Col className='display-flex' key={i}>
                        <Fade bottom when={isMounted} delay={i * 150}>
                            <div className='display-flex'>
                                <a href={icon.link} target="_blank" rel="noreferrer">
                                    <i className={icon.icon}></i>
                                </a>
                            </div>
                        </Fade>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Footer;