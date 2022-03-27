import React, { Component } from "react";
import "./mainscroller.css";
import Particles from "../Particles/particles";
import IntroText from "../IntroText/introtext";
import SinglePage from "../SinglePage/singlepage";
import Navbar from "../Navbar/navbar";
// import ProjectsPage from "../ProjectsPage/projectspage";
import ExperiencePage from "../ExperiencePage/experiencepage";
import ContactPage from "../ContactPage/contactpage";
import AboutPage from "../AboutPage/aboutpage";
import { ToastContainer } from "react-toastify";
import { throttle } from "underscore";
import { animateScroll as scroll, Events } from "react-scroll";

class MainScroller extends Component {
  refrences = {
    homePage: null,
    aboutPage: null,
    // projectsPage: null,
    experiencePage: null,
    contactPage: null,
  };
  state = {
    activeIndex: 0,
  };
  constructor(props) {
    super(props);
    this.createReferences();
  }
  autoScroll = false;
  activeIndexCopy;
  scrollToRef = (targetRef, activeIndex) => {
    this.autoScroll = true;
    scroll.scrollTo(this.refrences[targetRef].current.offsetTop, {
      duration: 800,
      smooth: "easeInOutCubic",
      containerId: "navbar-container-wrapper",
      offset: 150,
    });
    this.activeIndexCopy = activeIndex;
  };
  scrollFn = () => {
    if (!this.autoScroll) {
      const index = this.checkWhichPageIndexInViewport();
      if (index !== -1) this.setState({ activeIndex: index });
    }
  };
  throttledScrollToFn = throttle(this.scrollFn, 100);
  componentDidMount() {
    this.containerReference.current.addEventListener(
      "scroll",
      this.throttledScrollToFn
    );
    Events.scrollEvent.register("end", () => {
      this.setState({ activeIndex: this.activeIndexCopy });
      this.autoScroll = false;
    });
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <div
        ref={this.containerReference}
        id="navbar-container-wrapper"
        style={{
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <div className="navbar-container">
          <Navbar
            activeIndex={activeIndex}
            scrollToRef={this.scrollToRef}
            scrollToHome={() =>
              activeIndex !== 0 && this.scrollToRef("homePage")
            }
          />
        </div>
        <SinglePage isFirstPage={true} currRef={this.refrences.homePage}>
          {" "}
          <Particles />
          <IntroText scrollToWork={() => this.scrollToRef("experiencePage")} />
        </SinglePage>
        <SinglePage currRef={this.refrences.aboutPage}>
          <AboutPage activeIndex={activeIndex} pageIndex={1} />
        </SinglePage>
        {/* <div className="section-divider" />
        <SinglePage currRef={this.refrences.projectsPage}>
          <ProjectsPage activeIndex={activeIndex} pageIndex={2} />
        </SinglePage> */}
        <div className="section-divider" />
        <SinglePage currRef={this.refrences.experiencePage}>
          <ExperiencePage pageIndex={2} />{" "}
        </SinglePage>
        <div className="section-divider" />
        <SinglePage currRef={this.refrences.contactPage}>
          <ContactPage activeIndex={activeIndex} pageIndex={3} />
        </SinglePage>

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

  createReferences = () => {
    this.containerReference = React.createRef();
    Object.keys(this.refrences).forEach((ref) => {
      this.refrences[ref] = React.createRef();
    });
  };

  checkWhichPageIndexInViewport() {
    let index = Object.keys(this.refrences).findIndex((ref) =>
      isInViewport(this.refrences[ref].current)
    );
    return index !== this.state.activeIndex ? index : -1;
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
