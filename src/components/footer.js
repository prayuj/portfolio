import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { isDesktop } from 'react-device-detect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react'

const Footer = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 1400);
        return () => clearTimeout(timeout);
    }, []);

    const footerIcons = [
        {
            icon: 'fab fa-linkedin-in',
            link: 'https://www.linkedin.com/in/prayuj/'
        },
        {
            icon: 'fab fa-github',
            link: 'https://github.com/prayuj'
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
                    <Col className='display-flex'>
                        <TransitionGroup component={null}>
                            {isMounted &&
                                <CSSTransition classNames='fadeup' timeout={1000}>
                                    <div className='display-flex' style={{ transitionDelay: `${i * 150}ms` }}>
                                        <a href={icon.link} target="_blank">
                                            <i class={icon.icon}></i>
                                        </a>
                                    </div>
                                </CSSTransition>
                            }
                        </TransitionGroup>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Footer;