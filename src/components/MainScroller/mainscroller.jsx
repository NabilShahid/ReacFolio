import React, { Component } from "react";
import "./mainscroller.css";
import Particles from "../Particles/particles";
import IntroText from "../IntroText/introtext";
import Navbar from "../Navbar/navbar";
import ProjectsPage from "../ProjectsPage/projectspage";
import ExperiencePage from "../ExperiencePage/experiencepage";

// import ScrollSection from "../ScrollSection/scrollsection";
import { Fullpage, Slide } from "fullpage-react";
import Fade from "react-reveal/Fade";

import HomeIcons from "../HomeIcons/homeicons";
import AboutPage from "../AboutPage/aboutpage";
import ScrollAnimation from "react-animate-on-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css'
// import $ from 'jquery';

// import AngularIcon from "../../../src/assets/images/angular.png";
const { changeFullpageSlide } = Fullpage;
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

// fullPageOptions.slides = sections;
class MainScroller extends Component {
  state = {
    activeIndex: 0
  };
  constructor(props) {
    super(props);
    this.scrollerRef = React.createRef();
    AOS.init();
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
          <Navbar
            changeFullpageSlide={changeFullpageSlide}
            activeIndex={activeIndex}
            outsideSlideChange={this.outsideSlideChange}
          />
        </div>
        <Fullpage
          ref={this.scrollerRef}
          onSlideChangeStart={this.onSlideChangeStart}
          {...fullPageOptions}
          slides={[
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
                <HomeIcons />
              </div>
            </Slide>,
            <Slide  style={{ background: "#d8d8d8", ...allSlidesStyle }}>
              <AboutPage />
            </Slide>,
            <Slide style={{ background: "#d8d8d8", ...allSlidesStyle }}>
              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectsPage />
              </ScrollAnimation>
            </Slide>,
            <Slide style={{ background: "#d8d8d8", ...allSlidesStyle }}>
              <ExperiencePage />{" "}
            </Slide>,
            // <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>,
            <Slide style={{ background: "white", ...allSlidesStyle }}>
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                <div data-aos="fade-in" data-aos-duration="4000">
                  Some Text Some Text Some Text Some Text Some Text Some Text
                  Some Text Some Text Some Text Some Text Some Text
                </div>
              </ScrollAnimation>
            </Slide>
          ]}
        />
      </div>
    );
  }
  onSlideChangeStart = (a, b, {lastActive}, { activeSlide }) => {
      this.setState({ activeIndex: activeSlide });
  };
  outsideSlideChange = index => {
     this.setState({ activeIndex: index });
  };
}

export default MainScroller;
