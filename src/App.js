import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./About.js";
import Software from "./Software.js";
import Design from "./Design.js";

class App extends Component {
  render() {
    return (
      <div id="entire-website">
      <About/>
      <Software/>
      <Design/>
      </div>
    );
  }
}

export default App;
