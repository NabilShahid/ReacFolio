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
      <div id="mainScrollerDiv" data-hijacking="on" data-animation="scaleDown">
        {/* <!-- hijacking: on/off - animation: none/scaleDown/rotate/gallery/catch/opacity/fixed/parallax --> */}
		{/* <div id="maaCanvas" style={{width:"100vw",height:"100vh"}}></div> */}
		
		{/* <div id="particles-js" style={{width:"100vw",height:"100vh"}}></div> 
		 <div className="count-particles"> <span className="js-count-particles">--</span> particles </div> */}
        <ScrollSection
          visible={true}
          background="rgb(26, 32, 64)"
		  heading="Workflow f afd"
		  bgAnimId="particles-js"
        />
        <ScrollSection background="blue" heading="Workflow afsd" />
        <ScrollSection background="green" heading="Workflow Experfawefaience" />
        <ScrollSection background="yellow" heading="Workflow 3dsf" />
        <ScrollSection
          background="orange"
          heading="Workflow Exp12efasdfrience"
        />
        <nav>
          <ul className="cd-vertical-nav">
            <li>
              <a href="#0" className="cd-prev inactive">
                Next
              </a>
            </li>
            <li>
              <a href="#0" className="cd-next">
                Prev
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainScroller;
