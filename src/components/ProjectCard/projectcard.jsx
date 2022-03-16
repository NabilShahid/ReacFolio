import React, { Component } from "react";
import "./projectcard.css";
import { Icon,   } from "@iconify/react";
import { TechnologiesIcons } from "../../assets/iconifyicons";
import { PLATFORM_ICONS,   } from "../../constants.js";
import ReactTooltip from "react-tooltip";

class ProjectCard extends Component {
  state = {};
  technologyIconStyle = { width: "23px", height: "23px", marginRight: "15px" };
  render() {
    const {
      Name,
      Color,
      ImageFile,
      Technologies,
      Platform,
    } = this.props.project;
    const { action, project } = this.props;
    const PlatformIcon = PLATFORM_ICONS[Platform];
    return (
      <div className="project-card-container">
        <div
          className="project-card"
          onClick={() => {
            action(project);
          }}
          style={{ borderBottomColor: Color }}
        >
          <div className="project-card-avatar" style={{ background: Color }}>
            <PlatformIcon
              style={{ width: "34px", height: "34px", fill: "white" }}
            />
          </div>
          <div className="project-card-content">
            <div className="project-name">
              <div className="project-name-text">{Name}</div>
            </div>
            <ReactTooltip />
            <div className="project-technologies">
              {Technologies.map((t, index) => (
                <span key={index} className="project-card-icons">
                  {typeof t === "string" ? (
                    <Icon
                      style={this.technologyIconStyle}
                      icon={TechnologiesIcons[t]}
                    />
                  ) : (
                    <t.Icon style={this.technologyIconStyle} />
                  )}
                </span>
              ))}
            </div>
            <img
              className="project-card-img"
              alt="Projects"
              src={require(`../../assets/images/ProjectsTitleImages/${ImageFile}`)}
            />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
