import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextLoop from "react-text-loop";
import profilePic from "../../img/profile.png"

const HomeDesktop = () => {
    return (
        <Container className="main-container h-100 desktop">
            <Row className="h-100 justify-content-center align-items-center">
                <Col>
                    <img src={profilePic} id="profile-pic-desktop"></img>
                    <h1>Hello,</h1>
                    <h1>My Name is Prayuj!</h1>
                    <h1>I am a Software Engineer</h1>
                    <h1>and </h1>
                    <h1><TextLoop>
                        <span>a Professional Sleeper</span>
                        <span>a Certified Foodie</span>
                        <span>an Accomplished TV watcher</span>
                    </TextLoop></h1>
                </Col>
            </Row>
        </Container>);
}

export default HomeDesktop;