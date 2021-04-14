
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';
const Experience = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 2000);
        return () => clearTimeout(timeout);
    }, []);
    const experiences = [
        {
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
            organization: 'Aegis School of Data Science',
            designation: 'Data Science Intern',
            duration: 'June 2019 - August 2019',
            description: [`Worked on a Job Recommendation Model for Students.`, `Recommended Jobs based on the Job Requirement Skills and Grades of Students in those Skills.`
                , `Building the model included scrapping of Jobs, their requirements, matching skills between the Job and Student.`]
        },
        {
            organization: 'CaratLane',
            designation: 'Software Engineer Intern',
            duration: 'August 2018',
            description: [`Worked on a Job Recommendation Model for Students, based on Job Requirement Skill Set and Grades of Students in the Institute for.
            Used Python as a modelling tool.`]
        }
    ];
    const timeout = 2000;

    const style = {
        "width": "25%",
        "align-self": "center",
        "justify-content": "space-evenly",
        "transitionDelay": "600ms"
    }

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