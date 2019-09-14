import React, { Component } from "react";
import "./mainscroller.css";
import Particles from "../Particles/particles";
import IntroText from "../IntroText/introtext";
import Navbar from "../Navbar/navbar";
// import ScrollSection from "../ScrollSection/scrollsection";
import { Fullpage, Slide, HorizontalSlider } from "fullpage-react";
import Flip from "react-reveal/Flip";
import AngularIcon from "../../../src/assets/images/angular.png";
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
  enableArrowKeys: true,
  infinite: true
};

const horizontalSliderProps = {
  name: "horizontalSlider1", // name is required
  infinite: true // enable infinite scrolling
};

const subSections = [
  <Slide style={{ background: "white" }}> Slide 2.1 </Slide>,
  <Slide> Slide 2.2 </Slide>
];
horizontalSliderProps.slides = subSections;

const sections = [
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
      <IntroText/>
      {/* <img src={AngularIcon} /> */}
 
    </div>
    <div style={{ color: "white" }}></div>
  </Slide>,
  <Slide style={{ background: "grey" }}>
    {" "}
    <Flip>
      <p>Markup that will be revealed on scroll</p>
    </Flip>{" "}
  </Slide>,
  <Slide style={{ background: "white" }}>
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
fullPageOptions.slides = sections;
class MainScroller extends Component {
  state = {
    activeIndex: 0
  };
  componentDidMount() {}
  render() {
    const { activeIndex } = this.state;
    return (
      <div>
        <div id="navbarDiv">
          <div className="row">
            <div className="col-sm-7">
              {/* Nabil Shahid */}
            </div>
            <div className="col-sm-5" style={{textAlign:"right"}}>
              <Navbar
                changeFullpageSlide={changeFullpageSlide}
                activeIndex={activeIndex}
                outsideSlideChange={this.outsideSlideChange}
              />
            </div>
          </div>
        </div>
        <Fullpage
          onSlideChangeStart={this.onSlideChangeStart}
          {...fullPageOptions}
        />
      </div>
    );
  }
  onSlideChangeStart = (a, b, c, { activeSlide }) => {
    this.setState({ activeIndex: activeSlide });
  };
  outsideSlideChange = index => {
    this.setState({ activeIndex: index });
  };
}

export default MainScroller;
