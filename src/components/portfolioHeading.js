import {
    isDesktop
} from "react-device-detect";

const Heading = () => {
    if (isDesktop) {
        return (<div className="portfolio-heading display-flex"><span><h2>prayuj</h2></span><span className="accent-style"><h2>.tech</h2></span></div>)
    }
    return (<></>);
}

export default Heading;