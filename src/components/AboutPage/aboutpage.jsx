import React from "react";
import SkillsCard from "../SkillsCard/skillscard";
import MyImage from "../../assets/images/CVPIC.jpg";
import { ReactComponent as Graduation } from "../../assets/svgs/college-graduation.svg";
import { ReactComponent as Work } from "../../assets/svgs/briefcase.svg";
import "./aboutpage.css";
import FadeReveal from "react-reveal/Zoom";
let currentAnimSpy = 0;
const aboutIconsStyle = {
  height: "25px",
  width: "25px",
  marginRight: "5px",
  marginTop: "-5px",
  fill: "#585858"
};
const AboutPage = ({ activeIndex, pageIndex }) => {
  if (activeIndex == pageIndex) currentAnimSpy++;
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
          <FadeReveal duration={500} spy={currentAnimSpy}>
            <div className="aboutMeDiv">
              <img src={MyImage} alt="profile" className="profileImage" />

              <div className="aboutMeHeader">About Me</div>
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
                  3.5+ Years Experience
                </div>
              </div>
              <div className="aboutMeText">
                Hey it’s Nabil Shahid. I am a quality focused Full Stack
                Developer with a record of delivering high quality, robust and
                reliable software. Having propensity to write reusable,
                understandable and optimal code while keeping in mind best
                practices and standards. Profound insight and knowledge of front
                end and back end development technologies, frameworks, libraries,
                databases, architecture styles, patterns, and algorithms. I
                consider myself really good at Angular, React, JavaScript,
                SQL and Relational databases as I have worked on these
                technologies extensively and try to learn more about
                them every day.
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
