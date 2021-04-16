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
    return (
        <Container className={`footer ${isDesktop ? 'desktop-footer' : 'mobile-footer'}`}>
            <Row>
                <Col className='display-flex'>
                    <TransitionGroup component={null}>
                        {isMounted &&
                            <CSSTransition classNames='fadeup' timeout={1000}>
                                <div className='display-flex' style={{ transitionDelay: '0ms' }}>
                                    <a href="https://www.linkedin.com/in/prayuj/" target="_blank">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </CSSTransition>
                        }
                    </TransitionGroup>
                </Col>
                <Col className='display-flex'>
                    <TransitionGroup component={null}>
                        {isMounted &&
                            <CSSTransition classNames='fadeup' timeout={1000}>
                                <div className='display-flex' style={{ transitionDelay: '150ms' }}>
                                    <a href="https://github.com/prayuj" target="_blank" className='footer-a-default'>
                                        <i class="fab fa-github"></i>
                                    </a>
                                </div>
                            </CSSTransition>
                        }
                    </TransitionGroup>
                </Col>
                <Col className='display-flex'>
                    <TransitionGroup component={null}>
                        {isMounted &&
                            <CSSTransition classNames='fadeup' timeout={1000}>
                                <div className='display-flex' style={{ transitionDelay: '300ms' }}>
                                    <a href="mailto:prayuj@gmail.com" target="_blank" className='footer-a-default'><i class="far fa-envelope"></i></a>
                                </div>
                            </CSSTransition>
                        }
                    </TransitionGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;