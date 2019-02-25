import React, {Component} from 'react';
import './Design.css';
import design_logo from './images/design/design_logo.png';
import design_box from './images/design/design_box.png';

import bbs_design from './images/design/bbs_design.png';
import amal_design from './images/design/amal_design.png';
import un_design from './images/design/un_design.png';
import taiko_design from './images/design/taiko_design.png';

class Design extends React.Component {
  render() {
    //return <h1>Hello, {this.props.name}</h1>;
    return (
      <body>
        <div id="design-page" className="full-page">
          <div id="top-bar">
            <img className="design-logo" src={design_logo} alt="design logo"/>
          </div>
          <a href="https://mulanz.myportfolio.com/bbs-recruitment-material"><img className="design-boxes" id="box1" src={bbs_design} alt="design box"/></a>
          <a href="https://mulanz.myportfolio.com/amal-redesign"><img className="design-boxes" id="box2" src={amal_design} alt="design box"/></a>
          <a href="https://mulanz.myportfolio.com/united-nations-flyers"><img className="design-boxes" id="box3" src={un_design} alt="design box"/></a>
          <a href="https://mulanz.myportfolio.com/taiko-drums-human-virtues"><img className="design-boxes" id="box4" src={taiko_design} alt="design box"/></a>
          <h3 className="design-text" id="amal">amal redesign</h3>
          <h3 className="design-text" id="taiko">taiko drums</h3>
          <h3 className="design-text" id="bbs">bbs recruitment</h3>
          <h3 className="design-text" id="un">united nations</h3>
        </div>
      </body>
    );
  }
}

export default Design;
