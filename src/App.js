import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';
import Header from './components/header'
import Home from './components/home'
import AboutUs from './components/aboutus'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
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
        <Header></Header>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
          containerHeight="80vh"
          containerWidth=""
        >
          <Home></Home>
          <AboutUs></AboutUs>
        </ReactPageScroller>
      </div>
    );
  }
}

export default App;
