const Experience = () => {
    return (
        <>
            <div className="full-page-slide" style={{ width: '100%', height: '100vh' }}>
                <div className="display-flex justify-content-center align-items-center container">
                    <div className="display-flex justify-content-center flex-direction-column slide" >
                        <h1><span className="underline-style">My Experience</span></h1>
                        <h2>Cimpress</h2>
                        <h2>Software Engineer</h2>
                        <h3>August 2020 - Present</h3>
                        <p>Worked in Cimpress’ subsidiary National Pen which is a multi-lingual E-commerce platform
                        operating in 20+ nations. Completely Reengineered Website's' Navigation. Developed Lambdas and API’s in Node.js for efficiently improving
                        website performance and used Magnolia as a Content Management System (CMS). Had hands-on
                        experience with variety of technologies such as AWS, Sentry, Serverless, FTL, React.JS, GraphQL. </p>
                        <span id="add-blink-class" className={"cursor-pointer accent-style align-self-center"} onClick={() => {
                            if (window.fullpage_api.moveSlideRight) {
                                window.fullpage_api.moveSlideRight()
                            }
                        }
                        }><h3><i class="fas fa-chevron-right"></i></h3></span>
                    </div>
                </div>

            </div>
            <div className="full-page-slide" style={{ width: '100%', height: '100vh' }}>
                <div className="display-flex justify-content-center align-items-center container">
                    <div className="display-flex justify-content-center flex-direction-column" >
                        <h1><span className="underline-style">My Experience</span></h1>
                        <h2>Aegis School of Data Science</h2>
                        <h2>Data Science Intern</h2>
                        <h3>June 2019 - August 2019</h3>
                        <p>Worked on a Job Recommendation Model for Students, based on Job Requirement Skill Set and Grades of Students in the Institute for.
                        Used Python as a modelling tool.
                        </p>
                        <span className="cursor-pointer accent-style align-self-center" onClick={() => {
                            if (window.fullpage_api.moveSlideLeft) {
                                window.fullpage_api.moveSlideLeft()
                            }
                        }
                        }><h3><i class="fas fa-chevron-left"></i></h3></span>
                    </div>
                </div>

            </div>

        </>);
}

export default Experience;