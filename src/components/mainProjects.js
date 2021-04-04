import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import React, { useState } from 'react';

const Projects = () => {
    const projects = [
        {
            index: 0,
            name: 'Task Manager API',
            githublink: 'https://github.com/prayuj/task-manager',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'NodeJS, Jest'
        },
        {
            index: 1,
            name: 'Chat App using Socket.io',
            githublink: 'https://github.com/prayuj/task-manager',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'NodeJS, Socket.io'
        },
        {
            index: 2,
            name: 'Game Renting Service',
            githublink: 'https://github.com/prayuj/task-manager',
            linkedin: 'https://www.linkedin.com/posts/prayuj_mongodb-reactjs-nodejs-activity-6693029671027675136-EWoW',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'Mongo, Express, React, Node'
        },
        {
            index: 3,
            name: 'Timetable Generation using GA',
            githublink: 'https://github.com/prayuj/task-manager',
            youtubeLink: 'https://www.youtube.com/watch?v=E6EGCD9OUdA',
            paperlink: 'https://ssrn.com/abstract=3688387',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'Python, React'
        },
        {
            index: 4,
            name: 'Bill Splitter',
            githublink: 'https://github.com/prayuj/Bill-Spliter',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'React, Flask'
        },
        {
            index: 5,
            name: 'Calculator using Arduino with Python',
            githublink: 'https://github.com/prayuj/Arduino_Project_Calculator',
            youtubeLink: 'https://youtu.be/ViYliiQ6gec',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'Arduino, Python'
        }

    ]

    const iconObjects = [
        {
            name: 'githublink',
            icon: 'fab fa-github-square'
        },
        {
            name: 'linkedin',
            icon: 'fab fa-linkedin'
        },
        {
            name: 'youtubeLink',
            icon: 'fab fa-youtube'
        },
        {
            name: 'paperlink',
            icon: 'fas fa-newspaper'
        }
    ]

    const [active, setActive] = useState(projects[0])
    const handleShow = (key) => {
        console.log(active.index, key)
        if (!isNaN(key) && active.index != key) {
            setActive(projects[key])
        }
    }
    return (
        <div className="display-flex justify-content-center align-items-center flex-direction-column container">
            <h1>Projects</h1>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    Select
                            </Dropdown.Toggle>

                <Dropdown.Menu>
                    {projects.map((project) => (<Dropdown.Item href={`#projects/?project_key=${project.index}`} eventKey={project.index} onSelect={handleShow} className={project.index == active.index ? 'dropdown-active' : ''}>  {project.name}</Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>
            <Card>
                <Card.Body>
                    <div>
                        <span><h3>{active.name}</h3></span>

                        <p>{active.desc}</p>
                        <div>
                            {iconObjects.map(icon =>
                            (active[icon.name] ? <a href={active[icon.name]} style={{ width: 'max-content' }} target="_blank" rel="noreferrer" className="project-link">
                                <i class={icon.icon}></i>
                            </a> : '')
                            )}
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{active.languages}</small>
                </Card.Footer>
            </Card>
        </div >
    )
}

export default Projects;