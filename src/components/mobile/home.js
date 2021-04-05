import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextLoop from "react-text-loop";
import profilePic from "../../img/profile-mobile.png"

const HomeMobile = () => {
    return (
        <Container className="main-container h-100 mobile">
            <Row className="justify-content-center align-items-center flex-direction-column">
                <Col className="display-flex home-page-mobile flex-direction-column justify-content-center align-items-center">
                    <img src={profilePic} id="profile-pic-mobile"></img>
                </Col>
                <Col className="display-flex home-page-mobile flex-direction-column justify-content-center">
                    <h3>Hi,</h3>
                    <h3>I am Prayuj Pillai!</h3>
                    <h3>I am a Software Engineer and</h3>
                    <h3><TextLoop springConfig={{ stiffness: 340, damping: 30 }}>
                        <span>a Professional Sleeper</span>
                        <span>a Certified Foodie</span>
                        <span>an Accomplished TV watcher</span>
                    </TextLoop></h3>
                </Col>

            </Row>
        </Container >
    );
}

export default HomeMobile;