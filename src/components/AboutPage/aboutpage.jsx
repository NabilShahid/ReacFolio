import React from "react";
import SkillsCard from "../SkillsCard/skillscard";
import MyImage from "../../assets/images/CVPIC.jpg";
import ScrollAnimation from "react-animate-on-scroll";

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
          <ScrollAnimation duration={0.5} animateIn="fadeInLeft">
             
            <img src={MyImage} alt="profile" className="profileImage" />
             </ScrollAnimation>
             <ScrollAnimation duration={0.5} animateIn="fadeInLeft">
             
            <div className="aboutMeHeader">About Me</div>
           </ScrollAnimation>
           <ScrollAnimation duration={0.5} animateIn="fadeInLeft">
             
            <div className="aboutMeText">
              My nabil is Nabil Shahid. I am a fullStack Developer. My nabil is
              Nabil Shahid. I am a fullStack Developer. My nabil is Nabil
              Shahid. I am a fullStack Developer. My nabil is Nabil Shahid. I am
              a fullStack Developer.
            </div>
           </ScrollAnimation>
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
