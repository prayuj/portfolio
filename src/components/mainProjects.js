
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const Projects = ({ show, delay = 500 }) => {
    const [isMounted, setIsMounted] = useState(show);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(show), delay);
        return () => clearTimeout(timeout);
    }, [show]);
    const projects = [
        {
            index: 0,
            name: 'Task Manager API',
            githublink: 'https://github.com/prayuj/task-manager',
            desc: 'As part of Andrew Meads\'s Node JS course, I built a Task Manager API. Features include Logging in, Registering, Adding Notes, Deleting Notes, Sorting Notes all while using JWT for authentication. I used Jest for automation and testing.',
            languages: 'NodeJS, Express, Mongo, Jest'
        },
        {
            index: 1,
            name: 'Chat App using Socket.io',
            githublink: 'https://github.com/prayuj/chat-app',
            desc: 'This was a really exciting Project because for the first time I used Socket.io to make real time, bidirectional communication. Features include entering Room ID and making a new or joining an Existing Room, Sending real time data for communication, Sending Current Location.',
            languages: 'NodeJS, Socket.io'
        },
        {
            index: 2,
            name: 'Game Renting Service',
            githublink: 'https://github.com/prayuj/Game-Renting-Service',
            linkedin: 'https://www.linkedin.com/posts/prayuj_mongodb-reactjs-nodejs-activity-6693029671027675136-EWoW',
            desc: 'This Project stemmed from a Job opportunity that was very lucrative which involved building a inventory system. It is a full stack project using React JS, Node JS with Express JS and Mongo DB. Various features include Issue and Return of Games along with OTP generation and validation, viewing list of past transactions, adding inventory and members, updating membership, etc.',
            languages: 'Mongo, Express, React, Node'
        },
        {
            index: 3,
            name: 'Timetable Generation using GA',
            githublink: 'https://github.com/prayuj/timetable_frontend',
            youtubeLink: 'https://www.youtube.com/watch?v=E6EGCD9OUdA',
            paperlink: 'https://ssrn.com/abstract=3688387',
            desc: '',
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
    const [inProp, setInProp] = useState(false);
    const timeout = 2000
    const handleShow = (key) => {
        setInProp(false)
        console.log(active.index, key)
        if (!isNaN(key) && active.index != key) {
            setActive(projects[key])
            setInProp(true)
        }
    }

    const duration = 300;

    return (
        <div className="display-flex justify-content-center flex-direction-column container">
            <Card>
                <Card.Body>
                    <TransitionGroup component={null}>
                        {isMounted && <CSSTransition key={0} classNames="fadeup" timeout={timeout}>
                            <div style={{ transitionDelay: '100ms' }}>
                                <h1><span className="underline-style">Projects</span></h1>
                                <div className="display-flex">
                                    <Dropdown className="display-flex">
                                        <Dropdown.Toggle id="dropdown-basic" className="display-flex align-items-center">
                                            <h3>{active.name}</h3>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu align="right">
                                            {projects.map((project) => (<Dropdown.Item href={`#projects`} eventKey={project.index} onSelect={handleShow} className={project.index == active.index ? 'dropdown-active' : ''}>  {project.name}</Dropdown.Item>))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                {projects.map((project, i) =>
                                    <CSSTransition
                                        in={active.index === i}
                                        timeout={300}
                                        classNames="description"
                                    >
                                        <p hidden={active.index !== i}>{project.desc}</p>
                                    </CSSTransition>
                                )}
                                <div>
                                    {iconObjects.map(icon =>
                                    (active[icon.name] ? <a href={active[icon.name]} style={{ width: 'max-content' }} target="_blank" rel="noreferrer" className="project-link">
                                        <i class={icon.icon}></i>
                                    </a> : '')
                                    )}
                                </div>
                            </div>
                        </CSSTransition>}
                    </TransitionGroup>

                </Card.Body>

                <TransitionGroup component={null}>
                    {isMounted && <CSSTransition key={0} classNames="fadeup" timeout={timeout}>
                        <Card.Footer style={{ transitionDelay: '300ms' }}><small className="text-muted">{active.languages}</small></Card.Footer>
                    </CSSTransition>}
                </TransitionGroup>
            </Card>
        </div >
    )
}

export default Projects;