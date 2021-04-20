
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
const Experience = ({ show, delay = 500 }) => {
    const [isMounted, setIsMounted] = useState(show);
    useEffect(() => {
        const timeout = setTimeout(() => { setIsMounted(show); }, delay);
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
        "justify-content": "space-evenly"
    }

    return (
        <div className="h-100 display-flex flex-direction-column justify-content-center container">
            <Fade bottom in={isMounted}><h1><span className="underline-style">My Experience</span></h1></Fade>
            {experiences.map((experience, index) => (
                <div className="full-page-slide fp-auto-height" style={{ width: '100%', height: '50vh' }}>
                    <div className="display-flex justify-content-center align-items-center container">
                        <div className="display-flex justify-content-center flex-direction-column slide" >
                            <Fade bottom in={isMounted} delay={200}>
                                <h2>{experience.organization}</h2>
                            </Fade>
                            <Fade bottom in={isMounted} delay={300}>
                                <h3>{experience.designation}</h3>
                            </Fade>
                            <Fade bottom in={isMounted} delay={400}>
                                <h4>{experience.duration}</h4>
                            </Fade>
                            <p>
                                <ul>
                                    {experience.description.map((point, index) => (
                                        <Fade bottom in={isMounted} delay={index * 100 + 500}><li>{point}</li></Fade>
                                    ))}
                                </ul>
                            </p>
                            {<Fade bottom in={isMounted} delay={600}>
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
                                </div></Fade>}
                        </div>
                    </div>
                </div>
            ))}
        </div>);
}

export default Experience;