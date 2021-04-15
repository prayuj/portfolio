import {
    isMobileOnly,
    isDesktop
} from "react-device-detect";
import HomeDesktop from './desktop/home'
import HomeMobile from './mobile/home'

const Home = ({ show }) => {
    if (isDesktop)
        return (<HomeDesktop show={show} />);
    else if (isMobileOnly) {
        return (<HomeMobile show={show} />);
    }
}

export default Home;