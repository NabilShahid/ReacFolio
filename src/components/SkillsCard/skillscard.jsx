import React from "react";
import { SKILLS } from "../../constants";
import { Icon, InlineIcon } from "@iconify/react";
import { TechologiesIcons } from "../../assets/iconifyicons";
import "./skillscard.css";
const SkillsCard = () => {
  return (
    <div id="skillsCard">
      <div className="skillsHeader">Top Skills</div>

      {SKILLS.map(skillarea => (
        <div className="skillsSection">
          <div className="skillsSectionHeader">{skillarea.Title}</div>
          <div className="skillsSectionBody">
            {skillarea.Items.map(item => (
              <span className="singleSkill" style={{background:item.Color}}>
                <span className="singleSkillIcon">
                  <Icon
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                      marginTop:"-3px"
                    }}
                    icon={TechologiesIcons[item.Icon]}
                  />
                </span>
                <span className="singleSkillText" >{item.Name}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
