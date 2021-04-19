
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';
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

    const StyledRow = styled(Row)`
        min-height:350px;
        height:100%
    `;

    return (
        <div className="display-flex justify-content-center flex-direction-column container">
            <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
                <StyledRow>
                    <Col sm={3}>
                        <Nav variant="tabs">
                            {experiences.map(experience =>
                                <Nav.Item>
                                    <Nav.Link href='#experience' eventKey={experience.index}>{experience.organization}</Nav.Link>
                                </Nav.Item>)}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {experiences.map(experience =>
                                <Tab.Pane eventKey={experience.index}>
                                    <h2>{experience.organization}</h2>
                                    <h3>{experience.designation}</h3>
                                    <h4>{experience.duration}</h4>
                                    {experience.description.map((point, index) => (
                                        <li>{point}</li>
                                    ))}
                                </Tab.Pane>
                            )}
                        </Tab.Content>
                    </Col>
                </StyledRow>
            </Tab.Container>
        </div>
    )
    /*
    <h2>{experience.organization}</h2>
                                    <h3>{experience.designation}</h3>
                                    <h4>{experience.duration}</h4>
                                    {experience.description.map((point, index) => (
                                        <li>{point}</li>
                                    ))} 
            ))}
                                    ))} 
                                    */
}

export default Experience;