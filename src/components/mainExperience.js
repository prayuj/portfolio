
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
const Experience = ({ show, delay = 500 }) => {
    const [isMounted, setIsMounted] = useState(show);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(show), delay);
        return () => clearTimeout(timeout);
    }, [show]);
    const experiences = [
        {
            index: 0,
            organization: 'Cimpress',
            designation: 'Software Engineer',
            duration: 'August 2020 - Present',
            description: [`I currently work at Cimpress’ subsidiary National Pen which is a multi-lingual, Mass Customization E-commerce platform
            operating in 20+ nations.`,
                `Noteable features I have engineered include: Developing and Reengineering of the Website Navigation, Adding User Segmentation to the Website,  
            Incoporating Product Discounts on the Website.`,
                `Various Technologies I have worked with include Magnolia, AWS, Serverlerss, NodeJs, GraphQL, Sentry, to name a few.`]
        },
        {
            index: 1,
            organization: 'Aegis School of Data Science',
            designation: 'Data Science Intern',
            duration: 'June 2019 - August 2019',
            description: [`Worked on a Job Recommendation Model for Students.`, `Recommended Jobs based on the Job Requirement Skills and Grades of Students in those Skills.`
                , `Building the model included scrapping of Jobs, their requirements, matching skills between the Job and Student.`]
        },
        {
            index: 2,
            organization: 'CaratLane',
            designation: 'Software Engineer Intern',
            duration: 'August 2018',
            description: [`Worked on a Job Recommendation Model for Students, based on Job Requirement Skill Set and Grades of Students in the Institute for.
            Used Python as a modelling tool.`]
        }
    ];
    const [active, setActive] = useState(experiences[0])
    const timeout = 2000;

    const handleShow = (key) => {
        console.log(active.index, key)
        if (!isNaN(key) && active.index != key) {
            setActive(experiences[key])
        }
    }

    const style = {
        "width": "25%",
        "align-self": "center",
        "justify-content": "space-evenly",
        "transitionDelay": "600ms"
    }

    return (
        <div className="display-flex justify-content-center flex-direction-column container">
            <Card>
                <Card.Body>
                    <TransitionGroup component={null}>
                        {isMounted && <CSSTransition key={0} classNames="fadeup" timeout={timeout}>
                            <div style={{ transitionDelay: '100ms' }}>
                                <h1><span className="underline-style">My Experience</span></h1>
                                <div className="display-flex">
                                    <Dropdown className="display-flex">
                                        <Dropdown.Toggle id="dropdown-basic" className="display-flex align-items-center">
                                            <h2>{active.organization}</h2>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu align="right">
                                            {experiences.map((experience) => (<Dropdown.Item href={`#experience`} eventKey={experience.index} onSelect={handleShow} className={experience.index == active.index ? 'dropdown-active' : ''}>  {experience.organization}</Dropdown.Item>))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                {experiences.map((experience, i) =>
                                    <CSSTransition
                                        in={active.index === i}
                                        timeout={300}
                                        classNames="description"
                                    >
                                        <div hidden={active.index !== i}>
                                            <h3>{experience.designation}</h3>
                                            <h4>{experience.duration}</h4>
                                            <ul>
                                                {experience.description.map((point, index) => (
                                                    <li>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CSSTransition>
                                )}
                            </div>
                        </CSSTransition>}

                    </TransitionGroup>
                </Card.Body>
            </Card>
        </div>
    )

    return (
        <>
            {experiences.map((experience, index) => (
                <div className="full-page-slide" style={{ width: '100%', height: '100vh' }}>
                    <div className="display-flex justify-content-center align-items-center container">
                        <div className="display-flex justify-content-center flex-direction-column slide" >
                            <TransitionGroup component={null}>
                                {isMounted && <CSSTransition key={0} classNames="fadeup" timeout={timeout}>
                                    <h1 style={{ transitionDelay: `100ms` }}><span className="underline-style">My Experience</span></h1>
                                </CSSTransition>}
                            </TransitionGroup>
                            <TransitionGroup component={null}>
                                {isMounted && <CSSTransition key={0} classNames="fadeup" timeout={timeout}>
                                    <h2 style={{ transitionDelay: `200ms` }}>{experience.organization}</h2>
                                </CSSTransition>}
                            </TransitionGroup>
                            <TransitionGroup component={null}>
                                {isMounted && <CSSTransition key={0} classNames="fadeup" timeout={timeout}>
                                    <h3 style={{ transitionDelay: `300ms` }}>{experience.designation}</h3>
                                </CSSTransition>}
                            </TransitionGroup>
                            <TransitionGroup component={null}>
                                {isMounted && <CSSTransition key={0} classNames="fadeup" timeout={timeout}>
                                    <h4 style={{ transitionDelay: `400ms` }}>{experience.duration}</h4>
                                </CSSTransition>}
                            </TransitionGroup>
                            <p>
                                <ul>
                                    <TransitionGroup component={null}>
                                        {isMounted && experience.description.map((point, index) => (
                                            <CSSTransition key={index} classNames="fadeup" timeout={timeout}><li style={{ transitionDelay: `${index * 100 + 500}ms` }}>{point}</li></CSSTransition>
                                        ))}
                                    </TransitionGroup>
                                </ul>
                            </p>
                            <TransitionGroup component={null}>
                                {isMounted && <CSSTransition key={index} classNames="fadeup" timeout={timeout}>
                                    <div className="display-flex align-items-center" style={style}>
                                        {index !== 0 ? <span id="add-blink-class" className="cursor-pointer accent-style align-self-center" onClick={() => {
                                            if (window.fullpage_api.moveSlideLeft) {
                                                window.fullpage_api.moveSlideLeft()
                                            }
                                        }
                                        }><h3><i class="fas fa-chevron-left"></i></h3></span> : ''}
                                        {index !== experiences.length - 1 ? <span id="add-blink-class" className="cursor-pointer accent-style align-self-center" onClick={() => {
                                            if (window.fullpage_api.moveSlideRight) {
                                                window.fullpage_api.moveSlideRight()
                                            }
                                        }
                                        }><h3><i class="fas fa-chevron-right"></i></h3></span> : ''}
                                    </div>
                                </CSSTransition>}
                            </TransitionGroup>
                        </div>
                    </div>
                </div>
            ))}
        </>);
}

export default Experience;