import React, { Component } from "react";
import "./projectcard.css";
import { Icon, InlineIcon } from "@iconify/react";
import { TechologiesIcons } from "../../assets/iconifyicons";
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
        <div className="projectCardImgDiv">
          <div className="projectName">
            <div className="projectNameText" style={{ background: Color }}>
              {Name}
            </div>
            <div style={{ color: Color }} onClick={()=>{action(project)}} className="projectLearnMoreDiv">Details</div>

          </div>
          <img
            className="projectCardImg"
            alt="Projects"
            src={require(`../../assets/images/ProjectsTitleImages/${ImageFile}`)}
          />{" "}
        </div>
        <div className="projectCardInfoDiv">
          <div className="projectDescription">{Description}</div>
          <div className="projectInfoHeader">Technogies</div>
          <div className="projectTechnologies">
            {Technologies.map(t => (
              <Icon
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
                icon={TechologiesIcons[t]}
              />
            ))}
          </div>
        </div>
         
      </div>
    );
  }
}

export default ProjectCard;
