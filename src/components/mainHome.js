import {
    isMobileOnly,
    isDesktop
} from "react-device-detect";
import HomeDesktop from './desktop/home'
import HomeMobile from './mobile/home'

const Home = () => {
    if (isDesktop)
        return (<HomeDesktop />);
    else if (isMobileOnly) {
        return (<HomeMobile />)
    }
}

export default Home;