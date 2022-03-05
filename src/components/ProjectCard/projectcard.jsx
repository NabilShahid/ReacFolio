import React, { Component } from "react";
import "./projectcard.css";
import { Icon, InlineIcon } from "@iconify/react";
import { TechologiesIcons } from "../../assets/iconifyicons";
import { PLATFORM_ICONS, ICON_LABELS } from "../../constants.js";
import ReactTooltip from "react-tooltip";
import FadeReveal from "react-reveal/Fade";
import { ReactComponent as InfoIcon } from "../../assets/svgs/info.svg";

class ProjectCard extends Component {
  state = {};
  technologyIconStyle = { width: "23px", height: "23px", marginRight: "15px" };
  render() {
    const {
      Name,
      Description,
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
              {Technologies.map((t) => (
                <span className="project-card-icons">
                  {typeof t == "string" ? (
                    <Icon
                      style={this.technologyIconStyle}
                      icon={TechologiesIcons[t]}
                      // data-tip={ICON_LABELS[t]}
                    />
                  ) : (
                    <t.Icon
                      style={this.technologyIconStyle}
                      // data-tip={ICON_LABELS[t.Name]}
                    />
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
