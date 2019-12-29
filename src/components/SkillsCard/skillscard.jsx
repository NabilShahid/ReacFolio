import React from "react";
import { SKILLS } from "../../constants";
import { Icon, InlineIcon } from "@iconify/react";
import { TechologiesIcons } from "../../assets/iconifyicons";
import ScrollAnimation from "react-animate-on-scroll";

import "./skillscard.css";
const iconStyle = {
  width: "25px",
  height: "25px",
  marginRight: "5px",
  marginTop: "0px"
};
const SkillsCard = () => {
  return (
    <div id="skillsCard">
      <div className="skillsHeader">Top Skills</div>

      {SKILLS.map(skillarea => (
        <ScrollAnimation animateIn="fadeInRight">
          <div className="skillsSection">
            <div className="skillsSectionHeader">{skillarea.Title}</div>
            <div className="skillsSectionBody">
              {skillarea.Items.map(item => (
                <span
                  className="singleSkill"
                  style={{ background: item.Color }}
                >
                  <span className="singleSkillIcon">
                    {item.IconSvg && <item.Icon style={iconStyle} />}
                    {!item.IconSvg && (
                      <Icon
                        style={iconStyle}
                        icon={TechologiesIcons[item.Icon]}
                      />
                    )}
                  </span>
                  <span className="singleSkillText">{item.Name}</span>
                </span>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
};

export default SkillsCard;
