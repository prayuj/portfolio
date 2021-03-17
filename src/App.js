import Header from './components/header'
import Home from './components/home'
import AboutUs from './components/aboutus'
import './App.css';

window.onscroll = function (e) {
  // called when the window is scrolled. 
  console.log(e)
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
