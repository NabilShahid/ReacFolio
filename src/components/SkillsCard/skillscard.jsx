import React from "react";
import { SKILLS } from "../../constants";
import { Icon, InlineIcon } from "@iconify/react";
import { TechologiesIcons } from "../../assets/iconifyicons";
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
    <div id="skills-card">
      <FadeReveal duration={700}>
        <div className="skills-header">Top Skills</div>

        {SKILLS.map((skillarea) => (
          <div className="skills-section">
            <div className="skills-section-header">{skillarea.Title}</div>
            <div className="skills-section-body">
              {skillarea.Items.map((item) => (
                <span className="technology-item">
                  <span>
                    {item.IconSvg && <item.Icon style={iconStyle} />}
                    {!item.IconSvg && (
                      <Icon
                        style={iconStyle}
                        icon={TechologiesIcons[item.Icon]}
                      />
                    )}
                  </span>
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
