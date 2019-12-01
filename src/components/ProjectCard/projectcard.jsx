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
    const {action}=this.props;
    return (
      <div className="projectCard" style={{ borderBottomColor: Color }}>
        {/* <div className="projectCardHeader" style={{ backgroundColor: Color }}>
          <div className="projectName">{Name}</div>
        </div> */}
        <div className="projectCardImgDiv" >
          <div className="projectName"><span className="projectNameText" style={{background:Color}}>

          {Name}
          </span>
          </div>
          <img
            className="projectCardImg"
            alt="Projects"
            src={require(`../../assets/images/ProjectsTitleImages/${ImageFile}`)}
          />{" "}
        </div>
        <div className="projectCardInfoDiv">
          <div className="projectDescription">{Description}</div>
          <div className="projectInfoHeader">Technogies:</div>
          <div className="projectTechnologies">
            {Technologies.map(t => (
              <Icon
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
                icon={TechologiesIcons[t]}
              />
            ))}
          </div>
          <div onClick={action} className="projectLearnMoreDiv">Learn More</div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
