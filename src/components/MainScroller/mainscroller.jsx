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
import { ReactComponent as StackOverflowLogo } from "../../assets/svgs/so-icon.svg";

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

const allSlidesStyle = {
  padding: "60px 10px 5px 10px"
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
        height: "100vh",
        width: "100vw"
      }}
    >
      <Particles />
      <IntroText />
      {/* <div id="logosImage">
        <img src={LogosImage} />
      </div> */}
      {/* <img src={AngularIcon} /> */}
    </div>
  </Slide>,
  <Slide style={{ background: "white", ...allSlidesStyle }}>
    {" "}
    <ProjectsPage />
  </Slide>,
  <Slide style={{ background: "#d8d8d8", ...allSlidesStyle }}>
    {" "}
    <ExperiencePage />
  </Slide>,
  <Slide style={{ background: "#d8d8d8", ...allSlidesStyle }}>
    <a href="https://www.google.com" target="_blank">
      asdf
    </a>
  </Slide>,
  // <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>,
  <Slide style={{ background: "white", ...allSlidesStyle }}>
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
          className={activeIndex == 0 ? "navbarFirstPage" : "navbarPage"}
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
