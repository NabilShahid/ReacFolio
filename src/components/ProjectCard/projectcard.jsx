import React, { Component } from "react";
import "./projectcard.css";
class ProjectCard extends Component {
  state = {};
  render() {
    return (
      <div className="projectCard">
        <div className="projectCardImgDiv">
        <img className="projectCardImg"
            src={require("../../assets/images/ProjectsTitleImages/appstudio.PNG")}
          />{" "}
        </div>
        <div className="projectCardDescription">
          This Is App Studio Yo
        </div>
      </div>
    );
  }
}

export default ProjectCard;
