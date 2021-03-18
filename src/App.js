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
      blockScrollUp: false,
      blockScrollDown: false,
    };
  }
  handlePageChange = number => {
    this.setState({
      blockScrollUp: true,
      blockScrollDown: true
    }, () => {
      this.setState({
        blockScrollUp: false,
        blockScrollDown: false,
        currentPage: number,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header onClickHandler={this.handlePageChange} />
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
          blockScrollUp={this.state.blockScrollUp}
          blockScrollDown={this.state.blockScrollDown}
          animationTimer={300}
        >
          <Home />
          <About />
          <Experience />
          <Education />
          <Hobbies />
        </ReactPageScroller>
        <ul id="pagination" onClick={e => {
          console.log(parseInt(e.target.id))
          if (e.target.id && parseInt(e.target.id)) { this.handlePageChange(parseInt(e.target.id)) }
        }}>
          <li id="0" className={this.state.currentPage === 0 ? 'active' : ''}><i id="0" class="fas fa-home"></i></li>
          <li id="1" className={this.state.currentPage === 1 ? 'active' : ''}><i id="1" class="fas fa-address-card"></i></li>
          <li id="2" className={this.state.currentPage === 2 ? 'active' : ''}><i id="2" class="fas fa-briefcase"></i></li>
          <li id="3" className={this.state.currentPage === 3 ? 'active' : ''}><i id="3" class="fas fa-user-graduate"></i></li>
          <li id="4" className={this.state.currentPage === 4 ? 'active' : ''}><i id="4" class="fas fa-table-tennis"></i></li>
        </ul>
      </div >
    );
  }
}

export default App;
