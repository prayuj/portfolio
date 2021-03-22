import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const Experience = () => {
    return (
        <>
            <div className="full-page-slide" style={{ width: '100%', height: '100vh' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}><h1>Slide 1.1</h1></div>
            </div>
            <div className="full-page-slide" style={{ width: '100%', height: '100vh' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}><h1>Slide 1.2</h1></div>
            </div>
            <div className="full-page-slide" style={{ width: '100%', height: '100vh' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}><h1>Slide 1.3</h1></div>
            </div>
        </>);
}

export default Experience;