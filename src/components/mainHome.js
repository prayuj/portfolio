import {
    isMobileOnly,
    isDesktop
} from "react-device-detect";
// import HomeDesktop from './desktop/home'
import HomeMobile from './mobile/home'
import Loadable from 'react-loadable';

function Loading(props) {
    if (props.error) {
        return <div>Error! <button onClick={props.retry}>Retry</button></div>;
    } else {
        return <div>Loading...</div>;
    }
}

const HomeDesktop = Loadable({
    loader: () => import('./desktop/home'),
    loading: Loading,
    render(loaded, props) {
        console.log(loaded, props)
        let Component = loaded.default;
        return <Component {...props} />;
    }
})

const Home = ({ show, isDarkMode }) => {
    if (isDesktop)
        return (<HomeDesktop show={show} isDarkMode={isDarkMode} />);
    else if (isMobileOnly) {
        return (<HomeMobile show={show} isDarkMode={isDarkMode} />);
    }
}

export default Home;