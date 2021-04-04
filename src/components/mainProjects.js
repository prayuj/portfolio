import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
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
            languages: 'Python, React'
        },
        {
            name: 'Bill Splitter',
            githublink: 'https://github.com/prayuj/Bill-Spliter',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'React, Flask'
        },
        {
            name: 'Calculator using Arduino with Python',
            githublink: 'https://github.com/prayuj/Arduino_Project_Calculator',
            youtubeLink: 'https://youtu.be/ViYliiQ6gec',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'Arduino, Python'
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
        <div className="display-flex justify-content-center align-items-center flex-direction-column container">
            <h1>Noteworthy Projects</h1>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Card>
                <Card.Body>
                    <h3>Card Title</h3>
                    <p>This is some text within a card body.</p>
                </Card.Body>
            </Card>
        </div >
    )
}

export default Projects;