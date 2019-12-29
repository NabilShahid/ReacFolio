import React from "react";
import SkillsCard from "../SkillsCard/skillscard";
import MyImage from "../../assets/images/CVPIC.jpg";
import ScrollAnimation from "react-animate-on-scroll";

import "./aboutpage.css";
import FadeReveal from "react-reveal/Fade";

const AboutPage = ({ activeIndex, pageIndex }) => {
  return (
    <div id="aboutPage">
      <div className="row">
        <div
          className="col-md-5"
          style={{ textAlign: "center", borderRight: " 1px solid #d0d0d0" }}
        >
          <FadeReveal
            duration={700}
            left
            spy={activeIndex}
            when={activeIndex == pageIndex}
          >
            <div className="aboutMeDiv">
              <img src={MyImage} alt="profile" className="profileImage" />

              <div className="aboutMeHeader">About Me</div>

              <div className="aboutMeText">
                My nabil is Nabil Shahid. I am a fullStack Developer. My nabil
                is Nabil Shahid. I am a fullStack Developer. My nabil is Nabil
                Shahid. I am a fullStack Developer. My nabil is Nabil Shahid. I
                am a fullStack Developer.
              </div>
            </div>
          </FadeReveal>
        </div>
        <div className="col-md-7">
          <SkillsCard activeIndex={activeIndex} pageIndex={pageIndex} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
