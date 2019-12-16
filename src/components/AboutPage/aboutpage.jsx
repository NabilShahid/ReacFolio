import React from "react";
import SkillsCard from "../SkillsCard/skillscard";
import MyImage from "../../assets/images/CVPIC.jpg";
import "./aboutpage.css";
const AboutPage = () => {
  return (
    <div id="aboutPage">
      <div className="row">
        <div
          className="col-md-5"
          style={{ textAlign: "center", borderRight: " 1px solid #d0d0d0" }}
        >
          <div className="aboutMeDiv">
            <img src={MyImage} alt="profile" className="profileImage" />
            <div className="aboutMeHeader">About Me</div>
            <div className="aboutMeText">
              My nabil is Nabil Shahid. I am a fullStack Developer. My nabil is
              Nabil Shahid. I am a fullStack Developer. My nabil is Nabil
              Shahid. I am a fullStack Developer. My nabil is Nabil Shahid. I am
              a fullStack Developer.
            </div>
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
