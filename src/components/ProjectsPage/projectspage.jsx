import React, { Component } from "react";
import ProjectCard from "../ProjectCard/projectcard";
import { PROJECTS } from "../../constants";

import "./projectspage.css";
import Modal from "react-responsive-modal";
import ProjectInfo from "../ProjectInfo/projectinfo";
import FadeReveal from "react-reveal/Fade";

class ProjectsPage extends Component {
  state = { modalOpen: false, selectedProject: {} };
  projectsArray = [];
  setProjectsArray = () => {
    let projectsCounter = 0;
    for (let i = 0; i < Math.ceil(PROJECTS.length / 3); i++) {
      this.projectsArray[i] = [];
      for (let j = 0; j < 3; j++) {
        if (PROJECTS[projectsCounter])
          this.projectsArray[i][j] = PROJECTS[projectsCounter++];
      }
    }
  };
  setModalVisibility = (selectedProject) => {
    const { modalOpen } = this.state;
    if (modalOpen) this.setState({ modalOpen: !modalOpen });
    else this.setState({ modalOpen: !modalOpen, selectedProject });
  };
  componentWillMount() {
    this.setProjectsArray();
  }
  render() {
    const { modalOpen, selectedProject } = this.state;
    return (
      <div id="projects-page">
        <div className="page-header">
          <h2 className="page-header-text">Work</h2>
          <div className="page-subtitle-text">
            Following are some of the recent projects that I have worked on.
            Click on the project tile to learn more about it.
          </div>
        </div>
        <Modal open={modalOpen} onClose={this.setModalVisibility}>
          <ProjectInfo project={selectedProject} />
        </Modal>

        {this.projectsArray.map((row, i) => (
          <div key={i} className="row projects-row">
            {row.map((col, j) => (
              <div key={j} className="col-sm-4" style={{ margin: "30px 0px" }}>
                <FadeReveal duration={700}>
                  <ProjectCard action={this.setModalVisibility} project={col} />
                </FadeReveal>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectsPage;
