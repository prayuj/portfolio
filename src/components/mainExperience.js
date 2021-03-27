const Experience = () => {
    return (
        <>
            <div className="experience-heading display-flex justify-content-center align-items-center"><h1>My Experience</h1></div>
            <div className="full-page-slide container" style={{ width: '100%', height: '100vh' }}>
                <div className="display-flex justify-content-center align-items-center flex-direction-column" >
                    <h1>Cimpress</h1>
                    <h2>August 2020 - Present</h2>
                    <p>Worked in Cimpress’ subsidiary National Pen which is a multi-lingual E-commerce platform
                    operating in 20+ nations. Developed Lambdas and API’s in Node.js for efficiently improving
                    website performance and used Magnolia as a Content Management System (CMS). Had hands-on
                        experience with variety of technologies such as AWS, Sentry, Serverless, FTL, React.JS, GraphQL. </p>
                </div>
            </div>
            <div className="full-page-slide" style={{ width: '100%', height: '100vh' }}>
                <div className="display-flex justify-content-center align-items-center"><h1>Aegis School of Data Science</h1></div>
            </div>
            <div className="full-page-slide" style={{ width: '100%', height: '100vh' }}>
                <div className="display-flex justify-content-center align-items-center"><h1>CaratLane</h1></div>
            </div>

        </>);
}

export default Experience;