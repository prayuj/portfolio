import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bounce from 'react-reveal/Bounce';
import { useState, useEffect } from 'react';

const Splash = ({ appLoaded, duration }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count === 0) {
            console.log('Updated')
            setIsMounted(true);
            setCount(count + 1);
        }
        const timeout = setTimeout(() => {
            appLoaded();
            setIsMounted(false)
        }, duration + 500)
        return () => clearTimeout(timeout);
    },
        [count, appLoaded, duration])
    return (
        <div style={{
            height: '100vh',
            width: '100vw'
        }}>
            <Container className="h-100">
                <Row className="h-100 justify-content-center align-items-center">
                    <Col className="display-flex justify-content-center side-margin" style={{
                        fontFamily: 'Saira, sans-serif',
                        fontWeight: '900'
                    }}>
                        <Bounce when={isMounted} left duration={duration}>
                            <span>
                                <h1>prayuj</h1>
                            </span>
                        </Bounce>
                        <Bounce when={isMounted} right duration={duration}>
                            <span className="accent-style">
                                <h1>.tech</h1>
                            </span>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Splash;