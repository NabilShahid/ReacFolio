import React, { Component } from "react";
import "./projectcard.css";
import { Icon, InlineIcon } from "@iconify/react";
import { TechologiesIcons, PlatformIcons } from "../../assets/iconifyicons";
import { ReactComponent as Web } from "../../assets/svgs/webicon.svg";
class ProjectCard extends Component {
  state = {};
  render() {
    const {
      Name,
      Description,
      Color,
      ImageFile,
      Technologies
    } = this.props.project;
    const { action, project } = this.props;
    return (
      <div className="projectCard" style={{ borderBottomColor: Color }}>
        <div className="projectCardAvatar" style={{background:Color}}><Web
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
              {/* <InfoIcon
                style={{ width: "22px", height: "22px", fill: Color }}
              /> */}
            </div>
          </div>
           {/* <div className="projectDescription">{Description}</div> */}
          {/* <div className="projectInfoHeader">Technogies</div> */}
          <div className="projectTechnologies">
            {Technologies.map(t => (
              <Icon
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
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
