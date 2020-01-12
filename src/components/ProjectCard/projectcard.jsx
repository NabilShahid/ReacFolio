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
      Platform
    } = this.props.project;
    const { action, project } = this.props;
    const PlatformIcon = PLATFORM_ICONS[Platform];
    return (
      <div className="projectCardContainer">
        <div
          className="projectCard"
          onClick={() => {
            action(project);
          }}
          style={{ borderBottomColor: Color }}
        >
          <div className="projectCardAvatar" style={{ background: Color }}>
            <PlatformIcon
              style={{ width: "34px", height: "34px", fill: "white" }}
            />
          </div>
          <div className="projectCardContentDiv">
            <div className="projectName">
              <div className="projectNameText">{Name}</div>
            </div>
            <ReactTooltip />
            <div className="projectTechnologies">
              {Technologies.map(t => (
                <span className="projectCardIcons">
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
              className="projectCardImg"
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
