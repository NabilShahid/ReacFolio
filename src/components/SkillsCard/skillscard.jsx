import React from "react";
import { SKILLS } from "../../constants";
import { Icon } from "@iconify/react";
import { TechnologiesIcons } from "../../assets/iconifyicons";
import FadeReveal from "react-reveal/Zoom";

import "./skillscard.css";

const iconStyle = {
  width: "25px",
  height: "25px",
  marginRight: "5px",
  marginTop: "0px",
};
const SkillsCard = () => {
  return (
    <div className="skills-card">
      <FadeReveal duration={700}>
        <h4 className="skills-header">Skills</h4>
        <p className="skills-intro">
          During my experience as a Software Developer, I have worked closely
          with a number of technologies while working on front end views, back
          end APIs, databases, asynchronous processing, setting up CI/CD
          pipelines, configuring servers, application monitoring etc. Among all,
          I consider myself proficient at working with the following
          technologies:
        </p>
        <ul className="un-styled-list">
          {SKILLS.map((skill) => (
            <li key={skill.Title} className="skills-section">
              <div className="skills-section-header">{skill.Title}</div>
              <ul className="skills-section-body un-styled-list">
                {skill.Items.map((item) => (
                  <li key={item} className="technology-item">
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </FadeReveal>
    </div>
  );
};

export default SkillsCard;
