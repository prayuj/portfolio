
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
const Projects = ({ show, delay = 500 }) => {
    const [isMounted, setIsMounted] = useState(show);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(show), delay);
        return () => clearTimeout(timeout);
    }, [show, delay]);
    const projects = [
        {
            index: 0,
            name: 'Task Manager API',
            links: [
                {
                    name: 'githublink',
                    link: 'https://github.com/prayuj/task-manager'
                }
            ],
            desc: 'As part of Andrew Meads\'s Node JS course, I built a Task Manager API. Features include Logging in, Registering, Adding Notes, Deleting Notes, Sorting Notes all while using JWT for authentication. I used Jest for automation and testing.',
            languages: 'NodeJS, Express, Mongo, Jest'
        },
        {
            index: 1,
            name: 'Chat App using Socket.io',
            links: [
                {
                    name: 'githublink',
                    link: 'https://github.com/prayuj/chat-app'
                }
            ],
            desc: 'This was a really exciting Project because for the first time I used Socket.io to make real time, bidirectional communication. Features include entering Room ID and making a new or joining an Existing Room, Sending real time data for communication, Sending Current Location.',
            languages: 'NodeJS, Socket.io'
        },
        {
            index: 2,
            name: 'Game Renting Service',
            links: [
                {
                    name: 'githublink',
                    link: 'https://github.com/prayuj/Game-Renting-Service'
                },
                {
                    name: 'linkedin',
                    link: 'https://www.linkedin.com/posts/prayuj_mongodb-reactjs-nodejs-activity-6693029671027675136-EWoW'
                }
            ],
            desc: 'This Project stemmed from a Job opportunity that was very lucrative which involved building a inventory system. It is a full stack project using React JS, Node JS with Express JS and Mongo DB. Various features include Issue and Return of Games along with OTP generation and validation, viewing list of past transactions, adding inventory and members, updating membership, etc.',
            languages: 'Mongo, Express, React, Node'
        },
        {
            index: 3,
            name: 'Timetable Generation using GA',
            links: [
                {
                    name: 'githublink',
                    link: 'https://github.com/prayuj/timetable_frontend'
                },
                {
                    name: 'youtubeLink',
                    link: 'https://www.youtube.com/watch?v=E6EGCD9OUdA'
                },
                {
                    name: 'paperlink',
                    link: 'https://ssrn.com/abstract=3688387'
                }
            ],
            desc: '',
            languages: 'Python, React'
        },
        {
            index: 4,
            name: 'Bill Splitter',
            links: [
                {
                    name: 'githublink',
                    link: 'https://github.com/prayuj/Bill-Spliter'
                }
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'React, Flask'
        },
        {
            index: 5,
            name: 'Calculator using Arduino with Python',
            links: [
                {
                    name: 'githublink',
                    link: 'https://github.com/prayuj/Arduino_Project_Calculator'
                },
                {
                    name: 'youtubeLink',
                    link: 'https://youtu.be/ViYliiQ6gec'
                }
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            languages: 'Arduino, Python'
        }

    ]

    const iconObjects = {
        githublink: 'fab fa-github-square',
        linkedin: 'fab fa-linkedin',
        youtube: 'fab fa-youtube',
        paperlink: 'fas fa-newspaper'
    }

    const style = {
        "width": "25%",
        "alignSelf": "center",
        "justifyContent": "space-evenly",
        "transitionDelay": "600ms"
    }

    return (
        <div className="h-100 display-flex flex-direction-column justify-content-center container">
            <Fade bottom in={isMounted}><h1><span className="underline-style">Projects</span></h1></Fade>
            {projects.map((project, index) => (
                <div className="full-page-slide fp-auto-height" style={{ width: '100%' }} key={index}>
                    <div className="display-flex justify-content-center align-items-center container">
                        <div className="display-flex justify-content-center flex-direction-column slide" >
                            <Fade bottom in={isMounted} delay={200}>
                                <h2>{project.name}</h2>
                            </Fade>
                            <Fade bottom in={isMounted} delay={300}>
                                <p>
                                    {project.desc}
                                </p>
                            </Fade>

                            <div className="project-link-container">
                                {project.links.map((linkObj, index) =>
                                    <Fade bottom when={isMounted} delay={index * 100 + 500} key={index}>
                                        <a href={linkObj.link} style={{ width: 'max-content' }} target="_blank" rel="noreferrer" className="project-link">
                                            <i className={iconObjects[linkObj.name]}></i>
                                        </a>
                                    </Fade>
                                )}
                            </div>
                            <Fade bottom when={isMounted} delay={600}>
                                <div className="display-flex align-items-center" style={style}>
                                    {index !== 0 ? <span id="add-blink-class" className="cursor-pointer accent-style align-self-center" onClick={() => {
                                        if (window.fullpage_api.moveSlideLeft) {
                                            window.fullpage_api.moveSlideLeft()
                                        }
                                    }
                                    }><h3><i className="fas fa-chevron-left"></i></h3></span> : ''}
                                    {index !== projects.length - 1 ? <span id="add-blink-class" className="cursor-pointer accent-style align-self-center" onClick={() => {
                                        if (window.fullpage_api.moveSlideRight) {
                                            window.fullpage_api.moveSlideRight()
                                        }
                                    }
                                    }><h3><i className="fas fa-chevron-right"></i></h3></span> : ''}
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;