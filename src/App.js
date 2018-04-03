import React, { Component } from 'react';
import Headers from './components/Headers';
import Main from './components/Main';
// import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers />
        <Main />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
