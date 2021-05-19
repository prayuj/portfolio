import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import '../css/experience.css';
const Experience = ({ show, delay = 500, slideIndex }) => {
    const [isMounted, setIsMounted] = useState(show);
    useEffect(() => {
        const timeout = setTimeout(() => { setIsMounted(show); }, delay);
        return () => clearTimeout(timeout);
    }, [show, delay, slideIndex]);
    const experiences = [
        {
            index: 0,
            organization: 'Cimpress',
            link: 'http://urls.prayuj.tech/t/cimpress',
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
            link: 'https://www.aegis.edu.in/',
            designation: 'Data Science Intern',
            duration: 'June 2019 - August 2019',
            description: [`Developed a Job Recommendation Model for Students' Placements.`, `Recommended Jobs based on the Job Requirement Skills and Grades of Students in those Skills.`
                , `Building the model included scrapping of Jobs, their requirements, matching skills between the Job and Student.`]
        },
        {
            index: 2,
            organization: 'CaratLane',
            link: 'https://www.caratlane.com/',
            designation: 'Software Engineer Intern',
            duration: 'August 2018',
            description: [`Designed and implemented a rule validation system for orders.`]
        }
    ];
    const style = {
        "width": "100%",
        "alignSelf": "center",
        "justifyContent": "space-evenly"
    }

    const experiencesLength = experiences.length;

    return (
        <div className="h-100 display-flex flex-direction-column justify-content-center container">
            <Fade bottom in={isMounted}>
                <span className="display-flex align-items-center side-margin">
                    <h5><span className="accent-style index">[2]</span></h5>
                    <h3>My Experience</h3>
                    <span style={{ marginLeft: 'auto', display: 'flex', fontStyle: "italic" }}>
                        <span className="accent-style">
                            <h6>{slideIndex + 1}</h6>
                        </span>
                        <span>
                            <h6>/{experiencesLength}</h6>
                        </span>
                    </span>
                </span>
            </Fade>
            {experiences.map((experience, index) => (
                <div className="full-page-slide fp-auto-height" style={{ width: '100%' }} key={index}>
                    <div className="display-flex justify-content-center align-items-center container">
                        <div className="display-flex justify-content-center flex-direction-column slide side-margin" >
                            <Fade bottom in={isMounted} delay={200}>
                                <span className="display-flex align-items-center">
                                    <h5>{experience.designation} <a target="_blank" rel="noreferrer" href={experience.link} className="content-hover-link">@{' ' + experience.organization}</a></h5>
                                </span>
                            </Fade>
                            <Fade bottom in={isMounted} delay={400}>
                                <h6>{experience.duration}</h6>
                            </Fade>
                            <ul>
                                {experience.description.map((point, index) => (
                                    <Fade bottom in={isMounted} delay={index * 100 + 500} key={index}>
                                        <li className="display-flex">
                                            <p>{point}</p>
                                        </li>
                                    </Fade>
                                ))}
                            </ul>
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
                    <span id="add-blink-class" className={`cursor-pointer accent-style align-self-center ${slideIndex === experiencesLength - 1 ? 'slide-move-disabled' : ''}`} onClick={() => {
                        if (window.fullpage_api.moveSlideRight) {
                            window.fullpage_api.moveSlideRight()
                        }
                    }
                    }><h3><i className="fas fa-chevron-right"></i></h3></span>
                </div>
            </Fade>}
        </div>);
}

export default Experience;