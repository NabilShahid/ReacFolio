import React, { Component } from "react";
import ProjectCard from "../ProjectCard/projectcard";
import { PROJECTS } from "../../constants";
import "./projectspage.css";

class ProjectsPage extends Component {
  state = {};
  render() {
    return (
      <div id="projectsPage">
        {/* <div id="projectPageTitle">My Recent Work</div> */}
        <div className="row">
          <div className="col-sm-4">
            <ProjectCard project={PROJECTS[0]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[1]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[2]} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <ProjectCard project={PROJECTS[0]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[1]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[2]} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <ProjectCard project={PROJECTS[0]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[1]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[2]} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <ProjectCard project={PROJECTS[0]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[1]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[2]} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <ProjectCard project={PROJECTS[0]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[1]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[2]} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <ProjectCard project={PROJECTS[0]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[1]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[2]} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <ProjectCard project={PROJECTS[0]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[1]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[2]} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <ProjectCard project={PROJECTS[0]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[1]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard project={PROJECTS[2]} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
