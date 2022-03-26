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
  fill: "#737373",
};
const AboutPage = () => {
  return (
    <div id="about-page">
      <div className="page-header">
        <h2 className="page-header-text">About</h2>
      </div>
      <div className="row">
        <div
          className="col-md-5"
          style={{ textAlign: "center", borderRight: " 1px solid #d0d0d0" }}
        >
          <div className="about-me-wrapper">
            <img src={MyImage} alt="profile" className="profile-image" />
            <FadeReveal duration={700}>
              {/* <div className="aboutMeHeader">About Me</div> */}
              <div className="row about-me-info-item-container">
                <div className="aboute-me-info-item col-md-6 about-me-info-items-seperator">
                  <Graduation style={{ ...aboutIconsStyle }} /> BS Computer
                  Science
                </div>

                <div className="aboute-me-info-item col-md-6">
                  <Work
                    style={{
                      ...aboutIconsStyle,
                      height: "23px",
                      width: "23px",
                    }}
                  />{" "}
                  4+ Years Experience
                </div>
              </div>
            </FadeReveal>
            <FadeReveal duration={700} delay={200}>
              <p className="about-me-text">
                I am a software developer with 5+ years of experience solving
                business critical problems through technology. I am passionate
                about web development and like implementing solutions that have
                a real impact.
              </p>{" "}
              <p className="about-me-text">
                Experienced in architecting, developing and maintaining small to
                large scale software systems. Advocate of making processes
                efficient through integration of right tools and automations.
                Experienced working both in teams and independently.
              </p>
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
