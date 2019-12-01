import React, { Component } from "react";
import ProjectCard from "../ProjectCard/projectcard";
import { PROJECTS } from "../../constants";

import "./projectspage.css";
import Modal from "react-responsive-modal";

class ProjectsPage extends Component {
  state = {modalOpen:false};
  toggle = () => {
    let { toggle } = this.state
  
    this.setState({ toggle: !toggle })
  }
  setModalVisibility=()=>{
    debugger
    const {modalOpen}=this.state;
    this.setState({modalOpen:!modalOpen})
  }
  render() {
    const {modalOpen}=this.state;
    return (
      <div id="projectsPage">
       <Modal open={modalOpen} onClose={this.setModalVisibility}>
          <h4>Simple centered modal</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
        {/* <div id="projectPageTitle">My Recent Work</div> */}
        <div>
          Worked as a FullStack developer on the following projects
        </div>
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
