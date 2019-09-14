import React, { Component } from "react";
import "./mainscroller.css";
import Particles from "../Particles/particles";
import Navbar from "../Navbar/navbar";
// import ScrollSection from "../ScrollSection/scrollsection";
import { Fullpage, Slide, HorizontalSlider } from "fullpage-react";
import Flip from "react-reveal/Flip";
const { changeFullpageSlide, changeHorizontalSlide } = Fullpage;
const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 1,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 1,
  scrollSpeed: 350,
  hideScrollBars: true,
  enableArrowKeys: true
};

const horizontalSliderProps = {
  name: "horizontalSlider1", // name is required
  infinite: true // enable infinite scrolling
};

const horizontalSlides = [
  <Slide style={{ background: "red" }}> Slide 2.1 </Slide>,
  <Slide> Slide 2.2 </Slide>
];
horizontalSliderProps.slides = horizontalSlides;

const slides = [
  <Slide>
    {" "}
    <div
      style={{
        position: "absolute",
        zIndex: "-1",
        height: "100vh",
        width: "100vw"
      }}
    >
      <Particles />
    </div>
    <div style={{ color: "white" }}></div>
  </Slide>,
  <Slide style={{ background: "green" }}>
    {" "}
    <Flip>
      <p>Markup that will be revealed on scroll</p>
    </Flip>{" "}
  </Slide>,
  <Slide style={{ background: "blue" }}>
    {" "}
    <Flip>
      <p>Markup that will be revealed on scroll</p>
    </Flip>{" "}
  </Slide>,
  <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>,
  <Slide>
    {" "}
    <Flip>
      <p>Markup that will be revealed on scroll</p>
    </Flip>{" "}
  </Slide>
];
fullPageOptions.slides = slides;
class MainScroller extends Component {
  state = {
    activeIndex:0
  };
  componentDidMount() {}
  render() {
    const {activeIndex}=this.state;
    return (
      <div>
        <div id="navbarDiv">
          <Navbar changeFullpageSlide={changeFullpageSlide} activeIndex={activeIndex} outsideSlideChange={this.outsideSlideChange}/>
        </div>       
        <Fullpage onSlideChangeStart={this.onSlideChangeStart} {...fullPageOptions} />
      </div>
    );
  }
  onSlideChangeStart=(a,b,c,{activeSlide})=>{
   this.setState({activeIndex:activeSlide});
  }
  outsideSlideChange=(index)=>{
   this.setState({activeIndex:index});
  }
  componentWillUnmount() {}
  ren12der123() {
    return (
      <div id="mainScrollerDiv" data-hijacking="on" data-animation="parallax">
        <div id="mainNavigation">
          <ul className="main-nav-menu">
            <li>
              <a className="main-nav-item" id="section-1-Link">
                Section 1
              </a>
            </li>
            <li>
              <a className="main-nav-item" id="section-2-Link">
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
          </ul>
        </div>
        {/* <!-- hijacking: on/off - animation: none/scaleDown/rotate/gallery/catch/opacity/fixed/parallax --> */}
        {/* <div id="maaCanvas" style={{width:"100vw",height:"100vh"}}></div> */}

        {/* <div id="particles-js" style={{width:"100vw",height:"100vh"}}></div> 
		 <div className="count-particles"> <span className="js-count-particles">--</span> particles </div> */}
        {/* <ScrollSection
          visible={true}
          background="linear-gradient(to right bottom, #051037, #021446, #021755, #031964, #0a1b73)"
          heading="Section 1"
          bgAnimId="particles-js"
          sectionId="section-1"
        />
        <ScrollSection
          background="blue"
          heading="Section 2"
          sectionId="section-2"
        />
        <ScrollSection
          background="green"
          heading="Section 3"
          sectionId="section-3"
        />
        <ScrollSection
          background="yellow"
          sectionId="section-4"
          heading="Section 4"
        />
        <ScrollSection
          background="orange"
          heading="Section 5"
          sectionId="section-5"
        /> */}
        {/* <nav>
          <ul className="cd-vertical-nav">
            <li>
              <a className="cd-prev inactive">Next</a>
            </li>
            <li>
              <a className="cd-next">Prev</a>
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
              <a className="main-nav-item" id="section-2-Link">
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
        </nav> */}
      </div>
    );
  }
}

export default MainScroller;
