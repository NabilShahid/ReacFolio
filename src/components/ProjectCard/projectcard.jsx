import React, { Component } from "react";
import "./projectcard.css";
class ProjectCard extends Component {
  state = {};
  render() {
    const { Name, Description, Color, ImageFile } = this.props.project;
    return (
      <div className="projectCard">
        <div className="projectCardHeader" style={{ backgroundColor: Color }}>
          <div className="projectName">{Name}</div>
        </div>
        <div className="projectCardBody">
          <div className="projectCardImgDiv">
            <img
              className="projectCardImg"
              src={require(`../../assets/images/ProjectsTitleImages/${ImageFile}`)}
            />{" "}
          </div>
          <div className="projectCardInfoDiv">
            <div className="projectDescription">{Description}</div>
            <div className="projectTechnologies">
              <div style={{fontWeight:"bold"}}>Technogies</div>
              <img
              className="projectTechnologyImg"
              src={require(`../../assets/images/TechnologyIcons/angular.png`)}
            />{" "}
            <img
              className="projectTechnologyImg"
              src={require(`../../assets/images/TechnologyIcons/react.png`)}
            />{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
