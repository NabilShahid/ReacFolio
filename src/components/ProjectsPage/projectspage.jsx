import React, { Component } from "react";
import ProjectCard from "../ProjectCard/projectcard";
import { PROJECTS } from "../../constants";

import "./projectspage.css";
import Modal from "react-responsive-modal";
import ProjectInfo from "../ProjectInfo/projectinfo";
import LightSpeed from "react-reveal/LightSpeed";

class ProjectsPage extends Component {
  state = { modalOpen: false, selectedProject: {} };

  setModalVisibility = selectedProject => {
    const { modalOpen } = this.state;
    this.setState({ modalOpen: !modalOpen, selectedProject });
  };
  render() {
    const { modalOpen, selectedProject } = this.state;

    return (
      <div id="projectsPage">
        <Modal open={modalOpen} onClose={this.setModalVisibility}>
          <ProjectInfo project={selectedProject} />
        </Modal>
        {/* <div id="projectPageTitle">My Recent Work</div> */}

        <div className="row">
          <div className="col-sm-4">
            <LightSpeed mountOnEnter={true} left>
              <ProjectCard
                action={this.setModalVisibility}
                project={PROJECTS[0]}
              />
            </LightSpeed>
          </div>
          <div className="col-sm-4">
            <LightSpeed duration={5000} left>
              <ProjectCard
                action={this.setModalVisibility}
                project={PROJECTS[1]}
              />
            </LightSpeed>
          </div>
          <div className="col-sm-4">
            <LightSpeed duration={5000} left>
              <ProjectCard
                action={this.setModalVisibility}
                project={PROJECTS[2]}
              />
            </LightSpeed>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
