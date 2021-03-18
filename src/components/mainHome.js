import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextLoop from "react-text-loop";

const Home = () => {
    if (window.innerWidth > 992)
        return (
            <Container className="main-container h-100">
                <Row className="h-100 justify-content-center align-items-center">
                    <Col>
                        <h1>Hello,</h1>
                        <h1>My Name is Prayuj!</h1>
                        <h1>I am a Software Engineer</h1>
                        <h1>and {""}
                            <TextLoop>
                                <span>a Professional Sleeper</span>
                                <span>a Certified Foodie</span>
                                <span>an Accomplished TV watcher</span>
                            </TextLoop>
                        </h1>
                    </Col>
                </Row>
                {/* <Row>
                <Col>
                    <h1>Hello!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Ny Name is Prayuj!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>I am a Software Engineer</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>and</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TextLoop>
                        <h1>Dancer</h1>
                        <h1>Bowler</h1>
                        <h1>Fighter</h1>
                    </TextLoop>
                </Col>
            </Row> */}
            </Container>);
    else {
        return (<div className="px-3 current-main-element">
            Home!
        </div>)
    }
}

export default Home;