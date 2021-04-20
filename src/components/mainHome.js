import {
    isMobileOnly,
    isDesktop
} from "react-device-detect";
import HomeDesktop from './desktop/home'
import HomeMobile from './mobile/home'

const Home = ({ show, isDarkMode }) => {
    if (isDesktop)
        return (<HomeDesktop show={show} isDarkMode={isDarkMode} />);
    else if (isMobileOnly) {
        return (<HomeMobile show={show} isDarkMode={isDarkMode} />);
    }
}

export default Home;