import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./About.js";
import Software from "./Software.js";

class App extends Component {
  render() {
    return (
      <div className="entire-website">
      <About/>
      <Software/>
      </div>
    );
  }
}

export default App;
