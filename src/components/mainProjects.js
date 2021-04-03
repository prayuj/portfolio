import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';

const Projects = () => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState({
        name: 'Task Manager API',
        githublink: 'https://github.com/prayuj/task-manager',
        languages: 'NodeJS, Jest'
    })
    const handleClose = () => setShow(false);
    const projects = [
        {
            name: 'Task Manager API',
            githublink: 'https://github.com/prayuj/task-manager',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'NodeJS, Jest'
        },
        {
            name: 'Chat App using Socket.io',
            githublink: 'https://github.com/prayuj/task-manager',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'NodeJS, Socket.io'
        },
        {
            name: 'Game Renting Service',
            githublink: 'https://github.com/prayuj/task-manager',
            linkedin: 'https://www.linkedin.com/posts/prayuj_mongodb-reactjs-nodejs-activity-6693029671027675136-EWoW',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'Mongo, Express, React, Node'
        },
        {
            name: 'Timetable Generation using GA',
            githublink: 'https://github.com/prayuj/task-manager',
            youtubeLink: 'https://www.youtube.com/watch?v=E6EGCD9OUdA',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'React, Flask'
        },
        {
            name: 'Timetable Generation using GA',
            githublink: 'https://github.com/prayuj/task-manager',
            youtubeLink: 'https://www.youtube.com/watch?v=E6EGCD9OUdA',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'React, Flask'
        },
        {
            name: 'Timetable Generation using GA',
            githublink: 'https://github.com/prayuj/task-manager',
            youtubeLink: 'https://www.youtube.com/watch?v=E6EGCD9OUdA',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'React, Flask'
        },
        {
            name: 'Timetable Generation using GA',
            githublink: 'https://github.com/prayuj/task-manager',
            youtubeLink: 'https://www.youtube.com/watch?v=E6EGCD9OUdA',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'React, Flask'
        }

    ]
    const handleShow = (e, key) => {
        console.log(e.target)
        if (!e.target.classList.contains('fab')) {
            setActive(projects[key])
            setShow(true);
        }
    }
    return (
        <div className="display-flex justify-content-center align-items-center flex-direction-column">
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>{active.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{active.desc}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1>Noteworthy Projects</h1>
            <CardDeck>
                {projects.map((project, index) => (
                    <Card border="warning" key={index}>
                        <Card.Body onClick={(e) => handleShow(e, index)}>
                            <div>
                                <h3>{project.name}</h3>
                                <div>
                                    {project.githublink ? <a href={project.githublink} style={{ width: 'max-content' }} target="_blank" rel="noreferrer"><i class="fab fa-github-square"></i></a> : ''}
                                    {project.linkedin ? <a href={project.linkedin} style={{ width: 'max-content' }} target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a> : ''}
                                    {project.youtubeLink ? <a href={project.youtubeLink} style={{ width: 'max-content' }} target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i></a> : ''}
                                </div>
                            </div>
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