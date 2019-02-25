import React, {Component} from 'react';
import './About.css';
import mulan_pic from './images/homepage/mulan_icon.png';
import mulanzhao_logo from './images/homepage/mulanzhao_logo.png';
import topbar_line from './images/homepage/line_for_topbar.png';
import box_yellow from './images/homepage/box_yellow.png';
import yellow_circle from './images/page_circle.png'
class About extends React.Component {
  render() {
    //return <h1>Hello, {this.props.name}</h1>;
    return (
      <body>
        <div id="top-bar">
          <img className="logo" src={mulanzhao_logo} alt="mulan zhao logo"/>
          <img id="topbar_line" src={topbar_line} alt="top bar line"/>
          <div id="bar-links" className="space-evenly">
            <a href="#" class="link-text"><h3 className="title-links" id="about-link">about</h3></a>
            <a href="#software-page" class="link-text"><h3 className="title-links" id="software-link">software</h3></a>
            <a href="#design-page" class="link-text"><h3 className="title-links" id="design-link">design</h3></a>
            <h3 className="title-links" id="shots-link">shots</h3>
          </div>
        </div>
        <div id="about-page" className="page">
          <a href="#"><img className="yellow-circle" id="circle1" src={yellow_circle} alt="yellow circles"/></a>
          <a href="#software-page"><img className="yellow-circle" id="circle2" src={yellow_circle} alt="yellow circles"/></a>
          <a href="design-page"><img className="yellow-circle" id="circle3" src={yellow_circle} alt="yellow circles"/></a>
          <img className="yellow-circle" id="circle4" src={yellow_circle} alt="yellow circles"/>
          <img id="mulan_pic" src={mulan_pic} alt="mulan pic"/>
          <img id="box_yellow" src={box_yellow} alt="box yellow"/>
          <div id="about-font">
            <h2>about</h2>
            <h3></h3>
            <h3>mulan is a sophomore at <span class="text-emphasis">uc berkeley</span> studying computer science. she wants to
            explore the intersection between <span class="text-emphasis">tech</span>, <span class="text-emphasis">visual expression</span>, and <span class="text-emphasis">social impact</span>.</h3>
            <h3>if she goes missing, you'll probably find her <span class="text-emphasis">thrifting</span>, <span class="text-emphasis">volunteering</span> with dogs,
            or <span class="text-emphasis">writing</span> in a cute cafe. she's always looking for tips on living a sustainable lifestyle
            and <span class="text-emphasis">self improvement</span>.</h3>

            <h3>her favorite snack is hot cheetos.</h3>
          </div>
        </div>
      </body>
    );
  }
}

export default About;
