import React, { Component } from "react";
import "./mainscroller.css";
import Particles from "../Particles/particles";
import IntroText from "../IntroText/introtext";
import Navbar from "../Navbar/navbar";
import ProjectsPage from "../ProjectsPage/projectspage";
import ExperiencePage from "../ExperiencePage/experiencepage";
import ContactPage from "../ContactPage/contactpage";
import { Fullpage, Slide } from "fullpage-react";
import HomeIcons from "../HomeIcons/homeicons";
import AboutPage from "../AboutPage/aboutpage";
import { ToastContainer } from "react-toastify";

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
  maxSlideIndex = 4;
  constructor(props) {
    super(props);
    this.scrollerRef = React.createRef();
  }
  componentDidMount() {
    setTimeout(() => {
      changeFullpageSlide(0);
      window.scrollTo({ top: 0 });
      this.enableVerticalScrolling();
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
            <Slide style={{ background: "#d8d8d8", ...allSlidesStyle }}>
              <AboutPage activeIndex={activeIndex} pageIndex={1} />
            </Slide>,
            <Slide style={{ background: "#d8d8d8", ...allSlidesStyle }}>
              <ProjectsPage activeIndex={activeIndex} pageIndex={2} />
            </Slide>,
            <Slide style={{ background: "#d8d8d8", ...allSlidesStyle }}>
              <ExperiencePage />{" "}
            </Slide>,
            <Slide style={{ background: "#d8d8d8", ...allSlidesStyle }}>
              <ContactPage activeIndex={activeIndex} pageIndex={4} />
            </Slide>
          ]}
        />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
    );
  }
  onSlideChangeStart = (a, b, { lastActive }, { activeSlide }) => {
    if (
      activeSlide !== this.state.activeIndex &&
      activeSlide >= 0 &&
      activeSlide <= this.maxSlideIndex
    )
      this.setState({ activeIndex: activeSlide });
  };
  outsideSlideChange = index => {
    if (index !== this.state.activeIndex) this.setState({ activeIndex: index });
  };
  enableVerticalScrolling() {
    this.scrollerRef.current.onVerticalScroll = undefined;
    this.scrollerRef.current.ss.scrollPreventDefault = false;
    this.scrollerRef.current.ss.touchPreventDefault = false;
  }
}

export default MainScroller;
