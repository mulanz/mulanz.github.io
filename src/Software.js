import React, {Component} from 'react';
import './Software.css';
import software_logo from './images/software/software_logo.png';
import upper_left from './images/software/upper_left.png';
import bottom_left from './images/software/bottom_left.png';
import upper_right from './images/software/upper_right.png';
import bottom_right from './images/software/bottom_right.png';

import heapify_project from './images/software/heapify_project.png';
import gutenberg_project from './images/software/gutenberg_project.png';
import watshout_project from './images/software/watshout_project.png';
import csm_project from './images/software/csm_project.png';

class Software extends React.Component {
  render() {
    //return <h1>Hello, {this.props.name}</h1>;
    return (
      <body>
        <div id="software-page" className="full-page">
          <div id="top-bar">
            <img className="logo" src={software_logo} alt="software logo"/>
          </div>
          <a href="https://mulanz.github.io/codebase_mentored/Heap_Bubbling/"><img className="software-boxes" id="upper-left" src={heapify_project} alt="upper left box"/></a>
          <a href="https://www.watshout.com/"><img className="software-boxes" id="bottom-left" src={watshout_project} alt="bottom left box"/></a>
          <a href="https://csmberkeley.github.io/#/"><img className="software-boxes" id="bottom-right" src={csm_project} alt="upper right box"/></a>
          <img className="software-boxes" id="upper-right" src={gutenberg_project} alt="bottom right box"/>
          <h3 id='heapify'>heapify</h3>
          <h3 id='watshout'>watshout</h3>
          <h3 id='csmentors'>cs mentors</h3>
          <h3 id='gutenberg'>gutenberg</h3>
        </div>
      </body>
    );
  }
}

export default Software;
