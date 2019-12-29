import React from "react";
import SkillsCard from "../SkillsCard/skillscard";
import MyImage from "../../assets/images/CVPIC.jpg";

import "./aboutpage.css";
import FadeReveal from "react-reveal/Zoom";
let currentAnimSpy=0;
const AboutPage = ({ activeIndex, pageIndex }) => {
  if (activeIndex == pageIndex)
  currentAnimSpy++;
  return (
    <div id="aboutPage">
      <div className="pageHeader">
        <span className="pageHeaderText">
            About
        </span>
      </div>
      <div className="row">
        <div
          className="col-md-5"
          style={{ textAlign: "center", borderRight: " 1px solid #d0d0d0" }}
        >
          <FadeReveal duration={500} spy={currentAnimSpy}>
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
