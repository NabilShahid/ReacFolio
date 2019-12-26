import React, { Component } from "react";
import "./projectcard.css";
import { Icon, InlineIcon } from "@iconify/react";
import { TechologiesIcons, PlatformIcons } from "../../assets/iconifyicons";
import {PLATFORM_ICONS} from "../../constants.js";

class ProjectCard extends Component {
  state = {};
  render() {
    const {
      Name,
      Description,
      Color,
      ImageFile,
      Technologies,
      Platform
    } = this.props.project;
    const { action, project } = this.props;
    const PlatformIcon=PLATFORM_ICONS[Platform];
    return (
      <div className="projectCard" style={{ borderBottomColor: Color }}>
        <div className="projectCardAvatar" style={{background:Color}}><PlatformIcon
                style={{ width: "34px", height: "34px", fill:"white"}}
               />
            </div>
        <div className="projectCardContentDiv">
          <div className="projectName">
            <div className="projectNameText">{Name}</div>
            <div
              style={{ color: Color }}
              onClick={() => {
                action(project);
              }}
              className="projectLearnMoreDiv"
            >
              Details
              
            </div>
          </div>
         
          <div className="projectTechnologies">
            {Technologies.map(t => (
              <Icon
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
                icon={TechologiesIcons[t]}
              />
            ))}
          </div>
           <img
            className="projectCardImg"
            alt="Projects"
            src={require(`../../assets/images/ProjectsTitleImages/${ImageFile}`)}
          />{" "}
        </div>
       
      </div>
    );
  }
}

export default ProjectCard;
