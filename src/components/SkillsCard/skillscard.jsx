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
        <div className="skills-header">Top Skills</div>

        {SKILLS.map((skill) => (
          <div key={skill.Title} className="skills-section">
            <div className="skills-section-header">{skill.Title}</div>
            <div className="skills-section-body">
              {skill.Items.map((item) => (
                <span key={item.Name} className="technology-item">
                  {/* <span>
                    {item.IconSvg && <item.Icon style={iconStyle} />}
                    {!item.IconSvg && (
                      <Icon
                        style={iconStyle}
                        icon={TechnologiesIcons[item.Icon]}
                      />
                    )}
                  </span> */}
                  <p>{item.Name}</p>
                </span>
              ))}
            </div>
          </div>
        ))}
      </FadeReveal>
    </div>
  );
};

export default SkillsCard;
