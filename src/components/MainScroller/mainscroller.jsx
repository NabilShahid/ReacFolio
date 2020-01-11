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
    projectsPage: null
  }
  state = {
    activeIndex: 0,
    
  };
  constructor(props) {
    super(props);
    this.createReferences();
    console.log(this.refrences)
  }
  scrollToRef=(targetRef,activeIndex)=> {
    console.log(this)
    this.containerReference.current.scrollTo({
      top: this.refrences[targetRef].current.offsetTop,
      left: 0,
      behavior: "smooth"
    });
    this.setState({activeIndex})
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <div
        ref={this.containerReference}
        style={{ height: "100vh", overflowY: "scroll", position: "relative" }}
      >
        <div
          id="navbarDiv"
          className={activeIndex == 0 ? "navbarFirstPage" : "navbarPage"}
        >
          <Navbar
            changeFullpageSlide={changeFullpageSlide}
            activeIndex={activeIndex}
            outsideSlideChange={this.outsideSlideChange}
            scrollToRef={this.scrollToRef}
          />
        </div>
        <SinglePage currRef={this.refrences.homePage}>
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
        <SinglePage style={{ background: "#d8d8d8", ...allSlidesStyle }}>
          <ExperiencePage />{" "}
        </SinglePage>
        <SinglePage style={{ background: "#d8d8d8", ...allSlidesStyle }}>
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
}

export default MainScroller;
