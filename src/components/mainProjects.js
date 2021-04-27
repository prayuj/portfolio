
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import '../css/pagination.css'
const Projects = ({ show, delay = 500, slideIndex }) => {
    const [isMounted, setIsMounted] = useState(show);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(show), delay);
        return () => clearTimeout(timeout);
    }, [show, delay, slideIndex]);
    const projects = [
        {
            index: 0,
            name: 'Task Manager API',
            links: [
                {
                    name: 'wesbiteLink',
                    link: 'https://pillai-task-manager.herokuapp.com/'
                },
                {
                    name: 'githubLink',
                    link: 'https://github.com/prayuj/task-manager'
                }
            ],
            desc: `As part of Andrew Meads's Node JS course, I built a Task Manager API. 
            Features include Logging in, Registering, Adding Notes, Deleting Notes, Sorting Notes all while using JWT for authentication. I used Jest for automation and testing.`,
            languages: 'NodeJS, Express, Mongo, Jest'
        },
        {
            index: 1,
            name: 'Chat App using Socket.io',
            links: [
                {
                    name: 'wesbiteLink',
                    link: 'https://pillai-chat-app.herokuapp.com/'
                },
                {
                    name: 'githubLink',
                    link: 'https://github.com/prayuj/chat-app'
                }
            ],
            desc: `This was a really exciting Project because for the first time I used Socket.io to make real time, 
            bidirectional communication. Features include entering Room ID and making a new or joining an Existing Room, 
            Sending real time data for communication, Sending Current Location.`,
            languages: 'NodeJS, Socket.io'
        },
        {
            index: 2,
            name: 'Game Renting Service',
            links: [
                {
                    name: 'wesbiteLink',
                    link: 'https://prayuj.github.io/GRS-frontend/#/login'
                },
                {
                    name: 'githubLink',
                    link: 'https://github.com/prayuj/Game-Renting-Service'
                },
                {
                    name: 'linkedinLink',
                    link: 'https://www.linkedinLink.com/posts/prayuj_mongodb-reactjs-nodejs-activity-6693029671027675136-EWoW'
                }
            ],
            desc: `This Project stemmed from a Job opportunity that was very lucrative which involved building a inventory system. 
            It is a full stack project using React JS, Node JS with Express JS and Mongo DB. 
            Various features include Issue and Return of Games along with OTP generation and validation, 
            viewing list of past transactions, adding inventory and members, updating membership, etc.`,
            languages: 'Mongo, Express, React, Node'
        },
        {
            index: 3,
            name: 'Timetable Generation using AI',
            links: [
                {
                    name: 'githubLink',
                    link: 'https://github.com/prayuj/timetable_frontend'
                },
                {
                    name: 'youtubeLink',
                    link: 'https://www.youtube.com/watch?v=E6EGCD9OUdA'
                },
                {
                    name: 'paperLink',
                    link: 'https://ssrn.com/abstract=3688387'
                }
            ],
            desc: `For the Final Year Project of my Bachelor Program in Computer Engineering, 
            Our Team Developed a Timetable Generator that would create Timetables for a Univeristy, 
            We solved this multiconstraint problem using AI (Genetic Algorithm). 
            We also published a Research Paper regarding the methodology involved.`,
            languages: 'Python, React'
        },
        {
            index: 4,
            name: 'Bill Splitter',
            links: [

                {
                    name: 'wesbiteLink',
                    link: 'https://bill-splitter.prayuj.tech/'
                },
                {
                    name: 'githubLink',
                    link: 'https://github.com/prayuj/Bill-Spliter'
                }
            ],
            desc: `Have you ever been in a situation where a bunch of your friends are out for a meal 
            and when the Bill comes it's an ordeal to divide everyone's share. Well this takes care of it. 
            Simply add each Dish and the Person Contribution and it will calculate each individual's contribution. 
            It includes splitting taxes, tips, etc. in the appropriate proportion.`,
            languages: 'React, Flask'
        },
        {
            index: 5,
            name: 'Calculator using Arduino with Python',
            links: [
                {
                    name: 'githubLink',
                    link: 'https://github.com/prayuj/Arduino_Project_Calculator'
                },
                {
                    name: 'youtubeLink',
                    link: 'https://youtu.be/ViYliiQ6gec'
                }
            ],
            desc: `One of the earliest Projects I developed back in my Second Year of Engineering. 
            Basically we used an Ardunio as a sort of front end, which took input from a user and displayed 
            the answer using a keypad and LCD screen respectively. 
            For the heavy lifting of computation we chose Python and 
            it's simple function 'eval' to calculate expressions. 
            Data was transferred from the Arduino to Python using the Serial Port.`,
            languages: 'Arduino, Python'
        }

    ]

    const iconObjects = {
        wesbiteLink: 'fas fa-external-link-alt',
        githubLink: 'fab fa-github-square',
        linkedinLink: 'fab fa-linkedinLink',
        youtubeLink: 'fab fa-youtube',
        paperLink: 'fas fa-newspaper'
    }

    const style = {
        "width": "100%",
        "alignSelf": "center",
        "justifyContent": "space-evenly",
        "transitionDelay": "600ms"
    }

    const projectsLength = projects.length

    return (
        <div className="h-100 display-flex flex-direction-column justify-content-center container">
            <Fade bottom in={isMounted}>
                <span className="display-flex align-items-center side-margin">
                    <h5><span className="accent-style index">[3]</span></h5>
                    <h3>Projects</h3>
                    <span style={{ marginLeft: 'auto', display: 'flex', fontStyle: "italic" }}>
                        <span className="accent-style">
                            <h6>{slideIndex + 1}</h6>
                        </span>
                        <span>
                            <h6>/{projectsLength}</h6>
                        </span>
                    </span>
                </span>
            </Fade>
            {projects.map((project, index) => (
                <div className="full-page-slide fp-auto-height" style={{ width: '100%' }} key={index}>
                    <div className="display-flex justify-content-center align-items-center container">
                        <div className="display-flex justify-content-center flex-direction-column slide side-margin" >
                            <Fade bottom in={isMounted} delay={200}>
                                <h5>{project.name}</h5>
                            </Fade>
                            <Fade bottom in={isMounted} delay={300}>
                                <p>
                                    {project.desc}
                                </p>
                            </Fade>

                            <div className="project-link-container">
                                {project.links.map((linkObj, index) =>
                                    <Fade bottom when={isMounted} delay={index * 100 + 500} key={index}>
                                        <a href={linkObj.link} style={{ width: 'max-content' }} target="_blank" rel="noreferrer" className="project-link content-hover-link">
                                            <i className={iconObjects[linkObj.name]}></i>
                                        </a>
                                    </Fade>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {<Fade bottom in={isMounted} delay={600}>
                <div className="display-flex align-items-center" style={style}>
                    <span id="add-blink-class" className={`cursor-pointer accent-style align-self-center ${slideIndex === 0 ? 'slide-move-disabled' : ''}`} onClick={() => {
                        if (window.fullpage_api.moveSlideLeft) {
                            window.fullpage_api.moveSlideLeft()
                        }
                    }
                    }><h3><i className="fas fa-chevron-left"></i></h3></span>
                    <span id="add-blink-class" className={`cursor-pointer accent-style align-self-center ${slideIndex === projectsLength - 1 ? 'slide-move-disabled' : ''}`} onClick={() => {
                        if (window.fullpage_api.moveSlideRight) {
                            window.fullpage_api.moveSlideRight()
                        }
                    }
                    }><h3><i className="fas fa-chevron-right"></i></h3></span>
                </div>
            </Fade>}
        </div>
    )
}

export default Projects;