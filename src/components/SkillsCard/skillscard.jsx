import React from "react";
import { SKILLS } from "../../constants";
import { Icon, InlineIcon } from "@iconify/react";
import { TechologiesIcons } from "../../assets/iconifyicons";
import ScrollAnimation from "react-animate-on-scroll";
import FadeReveal from "react-reveal/Zoom";

import "./skillscard.css";
const iconStyle = {
  width: "25px",
  height: "25px",
  marginRight: "5px",
  marginTop: "0px"
};
let currentAnimSpy=0;
const SkillsCard = ({activeIndex,pageIndex}) => {
  if(activeIndex==pageIndex)
  currentAnimSpy++;
  return (
    <div id="skillsCard">
      <FadeReveal  duration={500} >
      <div className="skillsHeader">Top Skills</div>

      {SKILLS.map(skillarea => (
          <div className="skillsSection">
            <div className="skillsSectionHeader">{skillarea.Title}</div>
            <div className="skillsSectionBody">
              {skillarea.Items.map(item => (
                <span
                  className="singleSkill"                  
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
      ))}
      </FadeReveal>
    </div>
  );
};

export default SkillsCard;
