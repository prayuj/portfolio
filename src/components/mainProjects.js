import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

const Projects = () => {
    const projects = [
        {
            name: 'Task Manager API',
            link: 'https://github.com/prayuj/task-manager',
            languages: 'NodeJS, Jest'
        },
        {
            name: 'Chat App using Socket.io',
            link: 'https://github.com/prayuj/task-manager',
            languages: 'NodeJS, Socket.io'
        },
        {
            name: 'Game Renting Service',
            link: 'https://github.com/prayuj/task-manager',
            languages: 'React, Express'
        },
        {
            name: 'Bill Splitter App',
            link: 'https://github.com/prayuj/task-manager',
            languages: 'React, Flask'
        }
    ]

    return (
        <div className="display-flex justify-content-center align-items-center flex-direction-column">
            <h1>Projects</h1>
            <CardDeck>
                {projects.map((project) => (
                    <Card border="primary">
                        <Card.Body>
                            <div><h3>{project.name}</h3><a href={project.link} style={{ width: 'max-content' }} target="_blank"><i class="fas fa-external-link-alt"></i></a></div>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{project.languages}</small>
                        </Card.Footer>
                    </Card>
                ))}
            </CardDeck>
        </div>
    )
}

export default Projects;