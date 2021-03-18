import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Hobbies from './components/hobbies'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      paginationPageNumber: 0
    };
  }
  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = number => {
    this.setState({ paginationPageNumber: number });
    console.log(number);
  };

  onNavClickHandler = number => {
    this.handleBeforePageChange(number)
    this.handlePageChange(number)
  }
  render() {
    return (
      <div className="App">
        <Header onClickHandler={this.onNavClickHandler} />
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Home />
          <About />
          <Experience />
          <Education />
          <Hobbies />
        </ReactPageScroller>
        <ul id="pagination">
          <li className={this.state.paginationPageNumber === 0 ? 'active' : ''}><a href="#page1"></a></li>
          <li className={this.state.paginationPageNumber === 1 ? 'active' : ''}><a href="#page2"></a></li>
          <li className={this.state.paginationPageNumber === 2 ? 'active' : ''}><a href="#page3"></a></li>
          <li className={this.state.paginationPageNumber === 3 ? 'active' : ''}><a href="#page4"></a></li>
          <li className={this.state.paginationPageNumber === 4 ? 'active' : ''}><a href="#page5"></a></li>
        </ul>
      </div>
    );
  }
}

export default App;
