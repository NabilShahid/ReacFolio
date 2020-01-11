import React, { Component } from "react";
import "./mainscroller.css";
import Particles from "../Particles/particles";
import IntroText from "../IntroText/introtext";
import SinglePage from "../SinglePage/singlepage";
import Navbar from "../Navbar/navbar";
import ProjectsPage from "../ProjectsPage/projectspage";
import ExperiencePage from "../ExperiencePage/experiencepage";
import ContactPage from "../ContactPage/contactpage";
import HomeIcons from "../HomeIcons/homeicons";
import AboutPage from "../AboutPage/aboutpage";
import { ToastContainer } from "react-toastify";
import { throttle } from "underscore";
import { animateScroll as scroll,Events } from "react-scroll";

// const { changeFullpageSlide } = Fullpage;
const changeFullpageSlide = i => {};

const allSlidesStyle = {
  padding: "60px 10px 5px 10px"
};

// fullPageOptions.slides = sections;
class MainScroller extends Component {
  refrences = {
    homePage: null,
    aboutPage: null,
    projectsPage: null,
    experiencePage:null,
    contactPage:null
  };
  state = {
    activeIndex: 0
  };
  constructor(props) {
    super(props);
    this.createReferences();
    console.log(this.refrences);
  }
  autoScroll = false;
  activeIndexCopy;
  scrollToRef = (targetRef, activeIndex) => {
    this.autoScroll = true;
    scroll.scrollTo(this.refrences[targetRef].current.offsetTop, {
      duration: 1500,
      delay: 200,
      smooth: "easeInOutCubic",
      containerId: "containerElement",
      offset: 150
    });
    this.activeIndexCopy=activeIndex;
    // this.containerReference.current.scrollTo({
    //   top: this.refrences[targetRef].current.offsetTop,
    //   left: 0,
    //   behavior: "smooth"
    // });
    
  };
  scrollFn = () => {
    if (!this.autoScroll) {
      const index = this.checkWhichPageIndexInViewport();
      if (index != -1) this.setState({ activeIndex: index });
    }
  };
  throttledScrollToFn = throttle(this.scrollFn, 100);
  componentDidMount() {
    this.containerReference.current.addEventListener(
      "scroll",
      this.throttledScrollToFn
    );
    Events.scrollEvent.register('end', (to, element)=> {
      this.setState({ activeIndex:this.activeIndexCopy });
      this.autoScroll = false;
    });
    // setInterval(this.scrollFn,500)
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <div
        ref={this.containerReference}
        id="containerElement"
        style={{ height: "100vh", overflowY: "scroll", position: "relative" }}
      >
        <div
          id="navbarDiv"
          
        >
          <Navbar
            changeFullpageSlide={changeFullpageSlide}
            activeIndex={activeIndex}
            outsideSlideChange={this.outsideSlideChange}
            scrollToRef={this.scrollToRef}
          />
        </div>
        <SinglePage isFirstPage={true} currRef={this.refrences.homePage}>
          {" "}
          <Particles />
          <IntroText />
          <HomeIcons />
        </SinglePage>
        <SinglePage
          currRef={this.refrences.aboutPage}
          style={{ background: "#d8d8d8", ...allSlidesStyle }}
        >
          <AboutPage activeIndex={activeIndex} pageIndex={1} />
        </SinglePage>
        <SinglePage
          currRef={this.refrences.projectsPage}
          style={{ background: "#d8d8d8", ...allSlidesStyle }}
        >
          <ProjectsPage activeIndex={activeIndex} pageIndex={2} />
        </SinglePage>
        <SinglePage currRef={this.refrences.experiencePage} style={{ background: "#d8d8d8", ...allSlidesStyle }}>
          <ExperiencePage />{" "}
        </SinglePage>
        <SinglePage currRef={this.refrences.contactPage} style={{ background: "#d8d8d8", ...allSlidesStyle }}>
          <ContactPage activeIndex={activeIndex} pageIndex={4} />
        </SinglePage>
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
  createReferences = () => {
    this.containerReference = React.createRef();
    Object.keys(this.refrences).forEach(ref => {
      this.refrences[ref] = React.createRef();
    });
  };

  checkWhichPageIndexInViewport() {
    console.log("scrollevent")
    let index = Object.keys(this.refrences).findIndex(ref =>
      isInViewport(this.refrences[ref].current)
    );
    return index != this.state.activeIndex ? index : -1;
  }
}

function isInViewport(element, offset = 100) {
  if (!element) return false;
  const elemRect = element.getBoundingClientRect();
  return (
    (elemRect.top >= offset && elemRect.top <= offset) ||
    elemRect.bottom >= offset
  );
}

export default MainScroller;
