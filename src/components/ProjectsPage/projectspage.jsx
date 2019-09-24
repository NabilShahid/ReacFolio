import React, { Component } from "react";
import ProjectCard from "../ProjectCard/projectcard";
import "./projectspage.css";
class ProjectsPage extends Component {
  state = {};
  render() {
    return (
      <div id="projectsPage">
          <div id="projectPageTitle">
            Projects
          </div>
        <div className="row">
          <div className="col-sm-4">
            <ProjectCard />
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4"></div>
        </div>{" "}
      </div>
    );
  }
}

export default ProjectsPage;
