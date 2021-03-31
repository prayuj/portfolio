import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

const Projects = () => {
    return (<div className="display-flex justify-content-center align-items-center flex-direction-column">
        <h1>Projects</h1>
        <CardDeck>
            <Card border="primary">
                <Card.Body>
                    <div><h3>Task Manager API</h3><a href="https://github.com/prayuj/task-manager"><i class="fas fa-external-link-alt"></i></a></div>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">NodeJS</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <h3>Chat App using Socket.io</h3>
                    <p>This is some text within a card body.</p>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <h3>Game Renting Server</h3>
                    <p>This is some text within a card body.</p>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <h3>Bill Splitter App</h3>
                    <p>This is some text within a card body.</p>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <h3>B.E. Project</h3>
                    <p>This is some text within a card body.</p>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <h3>B.E. Project</h3>
                    <p>This is some text within a card body.</p>
                </Card.Body>
            </Card>
        </CardDeck>

    </div>
    );
}

export default Projects;