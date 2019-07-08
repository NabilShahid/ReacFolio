import React, { Component } from "react";
import "./mainscroller.css";
import ScrollSection from "../ScrollSection/scrollsection";
import {createParticles} from "../../services/particlesJS";
class MainScroller extends Component {
  state = {};
  componentDidMount() {
	// window.VANTA.WAVES({
	// 	el: "#maaCanvas"
	//   })
	createParticles()
  }
  render() {
    return (
      
      <div id="mainScrollerDiv" data-hijacking="on" data-animation="fixed">
    
        {/* <!-- hijacking: on/off - animation: none/scaleDown/rotate/gallery/catch/opacity/fixed/parallax --> */}
		{/* <div id="maaCanvas" style={{width:"100vw",height:"100vh"}}></div> */}
		
		{/* <div id="particles-js" style={{width:"100vw",height:"100vh"}}></div> 
		 <div className="count-particles"> <span className="js-count-particles">--</span> particles </div> */}
        <ScrollSection
          visible={true}
          background="rgb(26, 32, 64)"
		  heading="Section 1"
      bgAnimId="particles-js"
      sectionId="section-1"
        />
        <ScrollSection background="blue" heading="Section 2" sectionId="section-2"/>
        <ScrollSection background="green" heading="Section 3" sectionId="section-3" />
        <ScrollSection background="yellow" sectionId="section-4" heading="Section 4" />
        <ScrollSection
          background="orange"
          heading="Section 5"
          sectionId="section-5"
        />
          <nav>
          <ul className="cd-vertical-nav">
            <li>
              <a className="cd-prev inactive">
                Next
              </a>
            </li>
            <li>
              <a className="cd-next">
                Prev
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="main-nav-menu">
            <li>
              <a className="main-nav-item" id="section-1-Link">
                Section 1
              </a>
            </li>
            <li>
              <a className="main-nav-item"  id="section-2-Link">
                Section 2
              </a>
            </li>
            <li>
              <a className="main-nav-item" id="section-3-Link">
                Section 3
              </a>
            </li>
            <li>
              <a className="main-nav-item" id="section-4-Link">
                Section 4
              </a>
            </li>
            <li>
              <a className="main-nav-item" id="section-5-Link">
                Section 5
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainScroller;
