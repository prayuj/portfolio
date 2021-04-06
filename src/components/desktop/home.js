import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextLoop from "react-text-loop";
import profilePic from "../../img/profile.png"

const HomeDesktop = () => {
    return (
        <Container className="main-container h-100 desktop">
            <Row className="h-100 justify-content-center align-items-center">
                <Col className="display-flex  home-page-desktop flex-direction-column">
                    <h3>Hi,</h3>
                    <h3>I am <span className="underline-style">Prayuj Pillai!</span></h3>
                    <h3>I am a Software Engineer and</h3>
                    {/* <h3>and </h3> */}
                    <h3><TextLoop springConfig={{ stiffness: 340, damping: 30 }}>
                        <span>a Professional Sleeper</span>
                        <span>a Certified Foodie</span>
                        <span>an Accomplished TV watcher</span>
                    </TextLoop></h3>
                </Col>
                <Col className="display-flex home-page-desktop">
                    <img src={profilePic} id="profile-pic-desktop"></img>
                </Col>

            </Row>
        </Container >);
}

export default HomeDesktop;