import React, { Component } from "react";
import ProjectCard from "../ProjectCard/projectcard";
import { PROJECTS } from "../../constants";

import "./projectspage.css";
import Modal from "react-responsive-modal";
import ProjectInfo from "../ProjectInfo/projectinfo";

class ProjectsPage extends Component {
  state = {modalOpen:false,selectedProject:{}};
  
  setModalVisibility=(selectedProject)=>{
    const {modalOpen}=this.state;
    this.setState({modalOpen:!modalOpen,selectedProject})
  }
  render() {
    const {modalOpen,selectedProject}=this.state;
    
    return (
      <div id="projectsPage">
       <Modal open={modalOpen} onClose={this.setModalVisibility}>
        <ProjectInfo project={selectedProject}/>
        </Modal>
        {/* <div id="projectPageTitle">My Recent Work</div> */}
      
        <div className="row">
          <div className="col-sm-4">
            <ProjectCard action={this.setModalVisibility} project={PROJECTS[0]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard action={this.setModalVisibility} project={PROJECTS[1]} />
          </div>
          <div className="col-sm-4">
            {" "}
            <ProjectCard action={this.setModalVisibility} project={PROJECTS[2]} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default ProjectsPage;
