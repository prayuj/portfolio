const Experience = () => {

    const experiences = [
        {
            organization: 'Cimpress',
            designation: 'Software Engineer',
            duration: 'August 2020 - Present',
            description: `Currently work in Cimpress’ subsidiary National Pen which is a multi-lingual, Mass Customization E-commerce platform
            operating in 20+ nations. Noteable tasks include: Developing and  Reengineering of the Website's Navigation, . Developed Lambdas and API’s in Node.js 
            and used Magnolia as a Content Management System (CMS). Had hands-on
            experience with variety of technologies such as AWS, Sentry, Serverless, FTL, React.JS, GraphQL.`
        },
        {
            organization: 'Aegis School of Data Science',
            designation: 'Data Science Intern',
            duration: 'June 2019 - August 2019',
            description: `Worked on a Job Recommendation Model for Students, based on Job Requirement Skill Set and Grades of Students in the Institute for.
            Used Python as a modelling tool.`
        },
        {
            organization: 'CaratLane',
            designation: 'Software Engineer Intern',
            duration: 'August 2018',
            description: `Worked on a Job Recommendation Model for Students, based on Job Requirement Skill Set and Grades of Students in the Institute for.
            Used Python as a modelling tool.`
        }
    ];

    const style = {
        "width": "25%",
        "align-self": "center",
        "justify-content": "space-evenly"
    }

    return (
        <>
            {experiences.map((experience, index) => {
                switch (index) {
                    case 0:
                        return (
                            <div className="full-page-slide" style={{ width: '100%', height: '100vh' }}>
                                <div className="display-flex justify-content-center align-items-center container">
                                    <div className="display-flex justify-content-center flex-direction-column slide" >
                                        <h1><span className="underline-style">My Experience</span></h1>
                                        <h2>{experience.organization}</h2>
                                        <h3>{experience.designation}</h3>
                                        <h4>{experience.duration}</h4>
                                        <p>{experience.description}</p>
                                        <span id="add-blink-class" className="cursor-pointer accent-style align-self-center" onClick={() => {
                                            if (window.fullpage_api.moveSlideRight) {
                                                window.fullpage_api.moveSlideRight()
                                            }
                                        }
                                        }><h3><i class="fas fa-chevron-right"></i></h3></span>
                                    </div>
                                </div>
                            </div>
                        )

                    case experiences.length - 1:
                        return (
                            <div className="full-page-slide" style={{ width: '100%', height: '100vh' }}>
                                <div className="display-flex justify-content-center align-items-center container">
                                    <div className="display-flex justify-content-center flex-direction-column slide" >
                                        <h1><span className="underline-style">My Experience</span></h1>
                                        <h2>{experience.organization}</h2>
                                        <h3>{experience.designation}</h3>
                                        <h4>{experience.duration}</h4>
                                        <p>{experience.description}</p>
                                        <span id="add-blink-class" className="cursor-pointer accent-style align-self-center" onClick={() => {
                                            if (window.fullpage_api.moveSlideLeft) {
                                                window.fullpage_api.moveSlideLeft()
                                            }
                                        }
                                        }><h3><i class="fas fa-chevron-left"></i></h3></span>
                                    </div>
                                </div>
                            </div>
                        )

                    default:
                        return (
                            <div className="full-page-slide" style={{ width: '100%', height: '100vh' }}>
                                <div className="display-flex justify-content-center align-items-center container">
                                    <div className="display-flex justify-content-center flex-direction-column slide" >
                                        <h1><span className="underline-style">My Experience</span></h1>
                                        <h2>{experience.organization}</h2>
                                        <h3>{experience.designation}</h3>
                                        <h4>{experience.duration}</h4>
                                        <p>{experience.description}</p>
                                        <div className="display-flex align-items-center" style={style}>
                                            <span className="cursor-pointer accent-style" onClick={() => {
                                                if (window.fullpage_api.moveSlideLeft) {
                                                    window.fullpage_api.moveSlideLeft()
                                                }
                                            }
                                            }><h3><i class="fas fa-chevron-left"></i></h3></span>
                                            <span className="cursor-pointer accent-style" onClick={() => {
                                                if (window.fullpage_api.moveSlideRight) {
                                                    window.fullpage_api.moveSlideRight()
                                                }
                                            }
                                            }><h3><i class="fas fa-chevron-right"></i></h3></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            })}
        </>);
}

export default Experience;