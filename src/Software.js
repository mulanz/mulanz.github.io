import React, {Component} from 'react';
import './Software.css';
import software_logo from './images/software/software_logo.png';
import upper_left from './images/software/upper_left.png';
import bottom_left from './images/software/bottom_left.png';
import upper_right from './images/software/upper_right.png';
import bottom_right from './images/software/bottom_right.png';

class Software extends React.Component {
  render() {
    //return <h1>Hello, {this.props.name}</h1>;
    return (
      <body>
        <div id="software-page" className="full-page">
          <div id="top-bar">
            <img className="logo" src={software_logo} alt="software logo"/>
          </div>
          <img className="software-boxes" id="upper-left" src={upper_left} alt="upper left box"/>
          <img className="software-boxes" id="bottom-left" src={bottom_left} alt="bottom left box"/>
          <img className="software-boxes" id="upper-right" src={upper_right} alt="upper right box"/>
          <img className="software-boxes" id="bottom-right" src={bottom_right} alt="bottom right box"/>
        </div>
      </body>
    );
  }
}

export default Software;
