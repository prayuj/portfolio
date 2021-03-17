import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';
import Header from './components/header'
import Home from './components/home'
import AboutUs from './components/aboutus'
import Experience from './components/experience'
import Education from './components/education'
import Hobbies from './components/hobbies'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 0 };
  }
  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = number => {
    console.log(number);
  };
  render() {
    return (
      <div className="App">
        <Header onClickHandler={this.handlePageChange} />
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Home />
          <AboutUs />
          <Experience />
          <Education />
          <Hobbies />
        </ReactPageScroller>
      </div>
    );
  }
}

export default App;
