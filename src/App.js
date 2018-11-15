import React, { Component } from 'react';
import Searchbar from './pages/searchbar'
// import logo from './logo.svg';
import './App.css';
import Content from './pages/content';
import Footbar from './pages/footbar';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <React.Fragment>
        <Searchbar/>
        <Content/>
        <Footbar/>
      </React.Fragment>
    );
  }
}

export default App;
