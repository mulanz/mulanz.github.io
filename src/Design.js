import React, {Component} from 'react';
import './Design.css';
import design_logo from './images/design/design_logo.png';
import design_box from './images/design/design_box.png';

class Design extends React.Component {
  render() {
    //return <h1>Hello, {this.props.name}</h1>;
    return (
      <body>
        <div id="design-page" className="full-page">
          <div id="top-bar">
            <img className="design-logo" src={design_logo} alt="design logo"/>
          </div>
          <img className="design-boxes" id="box1" src={design_box} alt="design box"/>
          <img className="design-boxes" id="box2" src={design_box} alt="design box"/>
          <img className="design-boxes" id="box3" src={design_box} alt="design box"/>
          <img className="design-boxes" id="box4" src={design_box} alt="design box"/>
        </div>
      </body>
    );
  }
}

export default Design;
