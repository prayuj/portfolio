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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      blockScrollUp: false,
      blockScrollDown: false
    };

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

    if (number === 2) {
      document.getElementById('add-blink-class').classList.add('blink_me')
    }

    if (number !== 2 && this.state.currentPage === 2) {
      document.getElementById('add-blink-class').classList.remove('blink_me')
    }

    this.setState({
      currentPage: number,
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


    if (destination.index === 2) {
      document.getElementById('add-blink-class').classList.add('blink_me')
    }

    if (destination.index !== 2 && this.state.currentPage === 2) {
      document.getElementById('add-blink-class').classList.remove('blink_me')
    }

    this.setState({ currentPage: destination.index })
  }

  render() {
    if (isTablet) {
      return (<div><h1>Haven't made for Tablet!, Sorrz!</h1></div>)
    }
    else
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
            normalScrollElements={'.card'}
            loopHorizontal={false}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section"><Home /></div>
                  <div className="section"><About /></div>
                  <div className="section"><Experience /></div>
                  <div className="section"><Projects /></div>
                  <div className="section"><Contact /></div>
                </ReactFullpage.Wrapper>
              );
            }}

          />
          <Heading />
          <Pagination handleIconClick={this.handlePageChange} currentPage={this.state.currentPage} />
          <DayNightToggler />
          <Footer />
        </div >
      );
  }
}

export default App;
