import React, { Component } from 'react';
import Heading from './components/portfolioHeading'
import Footer from './components/footer'
import Home from './components/mainHome'
import About from './components/mainAbout'
import Experience from './components/mainExperience'
import Projects from './components/mainProjects'
import Contact from './components/mainContact'
import Pagination from './components/pagination'
import DayNightToggler from './components/dayNightToggler'
import { isTablet, isMobileOnly } from "react-device-detect";
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';

//start split
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      blockScrollUp: false,
      blockScrollDown: false,
      isAppLoaded: true,
      firstPageLoadedIndex: undefined,
      visitedPageIndexes: [false, false, false, false, false],
      disableScrolling: true
    };
    const cookieMode = document.cookie.match('(^|;)\\s*mode\\s*=\\s*([^;]+)')?.pop() || ''
    if (cookieMode) {
      this.state.isDarkMode = cookieMode === 'dark';
      document.getElementById('root').className = cookieMode;
    }
    else {
      document.cookie = "mode=dark"
      this.state.isDarkMode = true;
      document.getElementById('root').className = 'dark'
    }
    this.setFirstSection = this.setFirstSection.bind(this);
    this.setIsDarkMode = this.setIsDarkMode.bind(this);
  }

  setIsDarkMode() {
    this.setState({
      isDarkMode: !this.state.isDarkMode
    }, () => {
      document.getElementById('root').className = this.state.isDarkMode ? 'dark' : 'light'
      document.cookie = "mode=" + (this.state.isDarkMode ? 'dark' : 'light')
    })
  }

  setFirstSection() {
    window.fullpage_api.setAllowScrolling(false);
    setTimeout(() => {
      const index = window.fullpage_api.getActiveSection().index;
      window.fullpage_api.setAllowScrolling(true);
      const visitedPageIndexes = [...this.state.visitedPageIndexes]
      visitedPageIndexes[index] = true;
      this.setState(
        {
          firstPageLoadedIndex: window.fullpage_api.getActiveSection().index,
          disableScrolling: false,
          visitedPageIndexes
        })
    }, 1800)
  }

  handlePageChange = number => {
    if (number === 4) {
      console.log('Contact Page Loaded')
      this.handleContactPageLoad('render')

    }

    if (number !== 4 && this.state.currentPage === 4) {
      console.log('Contact Page Left')
      this.handleContactPageLoad('remove')
    }

    const visitedPageIndexes = [...this.state.visitedPageIndexes]
    if (!isNaN(this.state.firstPageLoadedIndex))
      visitedPageIndexes[number] = true;
    this.setState({
      currentPage: number,
      visitedPageIndexes
    }, () => window.fullpage_api.moveTo(number + 1))
  }

  handleContactPageLoad(action) {
    if (action === 'render') {
      document.getElementsByClassName('footer')[0].classList.add('footer-hide-top')
    } else if (action === 'remove') {
      document.getElementsByClassName('footer')[0].classList.remove('footer-hide-top')
    }
  }

  onLeave(origin, destination, direction) {
    console.log(destination.index, this.state.currentPage)
    if (destination.index === 4) {
      console.log('Contact Page Loaded')
      this.handleContactPageLoad('render')

    }

    if (destination.index !== 4 && this.state.currentPage === 4) {
      console.log('Contact Page Left')
      this.handleContactPageLoad('remove')
    }
    const visitedPageIndexes = [...this.state.visitedPageIndexes]
    if (!isNaN(this.state.firstPageLoadedIndex))
      visitedPageIndexes[destination.index] = true;
    this.setState({ currentPage: destination.index, visitedPageIndexes })
  }

  render() {
    if (isTablet) {
      return (<div><h1>Haven't made for Tablet!, Sorrz!</h1></div>)
    }
    else if (this.state.isAppLoaded)
      return (
        <div className="App">
          <ReactFullpage
            //fullpage options
            licenseKey={'YOUR_KEY_HERE'}
            scrollingSpeed={1000} /* Options here */
            onLeave={this.onLeave.bind(this)}
            anchors={['home', 'about', 'experience', 'projects', 'contact']}
            slideSelector={'.full-page-slide'}
            slidesNavigation={true}
            controlArrows={false}
            loopHorizontal={false}
            animateAnchor={false}
            afterRender={this.setFirstSection}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section"><Home show={this.state.visitedPageIndexes[0]} isDarkMode={this.state.isDarkMode} /></div>
                  <div className="section"><About show={this.state.visitedPageIndexes[1]} /></div>
                  <div className="section"><Experience show={this.state.visitedPageIndexes[2]} /></div>
                  <div className="section"><Projects show={this.state.visitedPageIndexes[3]} /></div>
                  <div className="section"><Contact show={this.state.visitedPageIndexes[4]} /></div>
                </ReactFullpage.Wrapper>
              );
            }}

          />
          <Heading />
          <Pagination handleIconClick={this.handlePageChange} currentPage={this.state.currentPage} />
          <DayNightToggler isDarkMode={this.state.isDarkMode} setIsDarkMode={this.setIsDarkMode} />
          <Footer />
        </div >
      );
  }
}

export default App;
