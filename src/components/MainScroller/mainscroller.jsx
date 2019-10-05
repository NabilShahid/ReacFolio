import React, { Component } from "react";
import "./mainscroller.css";
import Particles from "../Particles/particles";
import IntroText from "../IntroText/introtext";
import Navbar from "../Navbar/navbar";
import ProjectsPage from "../ProjectsPage/projectspage";
import ExperiencePage from "../ExperiencePage/experiencepage";
import UserInfo from "../UserInfo/userinfo";
// import ScrollSection from "../ScrollSection/scrollsection";
import { Fullpage, Slide, HorizontalSlider } from "fullpage-react";
import Flip from "react-reveal/Flip";
import ScrollSwipe from "scroll-swipe";
// import $ from 'jquery';

// import AngularIcon from "../../../src/assets/images/angular.png";
const { changeFullpageSlide, changeHorizontalSlide } = Fullpage;
const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 1,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 1,
  scrollSpeed: 270,
  hideScrollBars: true,
  enableArrowKeys: true,
  infinite: true
};

const horizontalSliderProps = {
  name: "horizontalSlider1", // name is required
  infinite: true // enable infinite scrolling
};

const subSections = [
  <Slide style={{ background: "red", fontSize: "100px" }}> Slide 2.1 </Slide>,
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
      <IntroText />
      {/* <img src={AngularIcon} /> */}
    </div>
    <div style={{ color: "white" }}></div>
  </Slide>,
  <Slide>
    {" "}
    <ProjectsPage />
  </Slide>,
  <Slide style={{ background: "white" }}>
    {" "}
    <ExperiencePage />
  </Slide>,
  <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>,
  <Slide>
    {" "}
    {/* <Flip> */}
    <div style={{ height: "100%", overflow: "scroll" }}>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
      <p style={{ color: "black" }}>Markup that will be revealed on scroll</p>
    </div>
    {/* </Flip>{" "} */}
  </Slide>
];
fullPageOptions.slides = sections;
class MainScroller extends Component {
  state = {
    activeIndex: 0
  };
  constructor(props) {
    super(props);
    this.scrollerRef = React.createRef();
  }
  componentDidMount() {
    setTimeout(() => {
      this.scrollerRef.current.onVerticalScroll = undefined;
      this.scrollerRef.current.ss.scrollPreventDefault = false;
      this.scrollerRef.current.ss.touchPreventDefault = false;
    });
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <div>
        <div
          id="navbarDiv"
          style={{
            backgroundColor: activeIndex == 0 ? "unset" : "#4c4c4c"
          }}
        >
          <div className="row">
            <div className="col-sm-3">
              {/* Nabil Shahid */}
              <UserInfo userName="Nabil Shahid" />
            </div>
            <div className="col-sm-9" style={{ textAlign: "right" }}>
              <Navbar
                changeFullpageSlide={changeFullpageSlide}
                activeIndex={activeIndex}
                outsideSlideChange={this.outsideSlideChange}
              />
            </div>
          </div>
        </div>
        <Fullpage
          ref={this.scrollerRef}
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
