import React from "react";
import SkillsCard from "../SkillsCard/skillscard";
import MyImage from "../../assets/images/CVPICNBG.png";
import { ReactComponent as Graduation } from "../../assets/svgs/college-graduation.svg";
import { ReactComponent as Work } from "../../assets/svgs/briefcase.svg";
import "./aboutpage.css";
import FadeReveal from "react-reveal/Zoom";
const aboutIconsStyle = {
  height: "25px",
  width: "25px",
  marginRight: "5px",
  marginTop: "-5px",
  fill: "#737373"
};
const AboutPage = () => {
  return (
    <div id="aboutPage">
      <div className="pageHeader">
        <span className="pageHeaderText">About</span>
      </div>
      <div className="row">
        <div
          className="col-md-5"
          style={{ textAlign: "center", borderRight: " 1px solid #d0d0d0" }}
        >
          <div className="aboutMeDiv">
            <img src={MyImage} alt="profile" className="profileImage" />
            <FadeReveal duration={700}>
              {/* <div className="aboutMeHeader">About Me</div> */}
              <div className="row aboutMeInfoItemContainer">
                <div className="abouteMeInfoItem col-md-6 aboutMeInfoItemsSeperator">
                  <Graduation style={{ ...aboutIconsStyle }} /> BS Computer
                  Science
                </div>

                <div className="abouteMeInfoItem col-md-6">
                  <Work
                    style={{
                      ...aboutIconsStyle,
                      height: "23px",
                      width: "23px"
                    }}
                  />{" "}
                  4+ Years Experience
                </div>
              </div>
            </FadeReveal>
            <FadeReveal duration={700} delay={200}>
              <div className="aboutMeText">
                Hey it’s Nabil Shahid. I am Full Stack
                JavaScript developer. Proficiently skilled in working with most
                in demand Frontend and Backend technologies including React,
                Angular, Node, Nest.js, TypeScript and many other. Working on a
                myriad of professional and personal projects, I have become
                reasonably skilled in writing clean and reusable code, bug
                fixing, solving complicated and critical software problems,
                optimizing code and creating good user experiences.
              </div>
            </FadeReveal>
          </div>
        </div>
        <div className="col-md-7">
          <SkillsCard />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
