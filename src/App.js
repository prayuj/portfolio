import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/mainHome'
import About from './components/mainAbout'
import Experience from './components/mainExperience'
import Education from './components/mainEducation'
import Hobbies from './components/mainHobbies'
import Contact from './components/mainContact'
import Pagination from './components/pagination'
import DayNightToggler from './components/dayNightToggler'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      blockScrollUp: false,
      blockScrollDown: false,
      paginationCurrentPage: 0
    };
  }
  handlePageChange = number => {
    this.setState({
      blockScrollUp: true,
      blockScrollDown: true
    }, () => {
      this.setState({
        currentPage: number,
      }, () => this.setState({
        blockScrollUp: false,
        blockScrollDown: false,
      }))
    })
  }

  // handleBeforePageChange = number => {
  //   this.setState({
  //     blockScrollUp: true,
  //     blockScrollDown: true
  //   }, () => {
  //     this.setState({
  //       paginationCurrentPage: number,
  //     }, () => this.setState({
  //       blockScrollUp: false,
  //       blockScrollDown: false,
  //     }))
  //   })
  // };

  render() {
    return (
      <div className="App">
        {/* <Header onClickHandler={this.handlePageChange} /> */}
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
          // onBeforePageScroll={this.handleBeforePageChange}
          blockScrollUp={this.state.blockScrollUp}
          blockScrollDown={this.state.blockScrollDown}
          animationTimer={300}
        >
          <Home />
          <About />
          <Experience />
          <Education />
          <Hobbies />
          <Contact />
        </ReactPageScroller>
        <Pagination handleIconClick={this.handlePageChange} currentPage={this.state.currentPage} />
        <DayNightToggler></DayNightToggler>
        <Footer />
      </div >
    );
  }
}

export default App;
