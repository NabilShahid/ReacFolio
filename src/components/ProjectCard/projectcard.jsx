import React, { Component } from "react";
import "./projectcard.css";
class ProjectCard extends Component {
  state = {};
  render() {
    const { Name, Description, Color, ImageFile } = this.props.project;
    return (
      <div>
        <div className="note">
          Based on this{" "}
          <a
            href="https://dribbble.com/shots/3127773-Event-Card"
            target="_blank"
          >
            dribbble
          </a>
        </div>
        <article className="card">
          <div className="thumb"></div>
          <div className="infos">
            <h2 className="title">
              new york city<span className="flag"></span>
            </h2>
            <h3 className="date">november 2 - 4</h3>
            <h3 className="seats">seats remaining: 2</h3>
            <p className="txt">
              Join us for our Live Infinity Session in beautiful New York City.
              This is a 3 day intensive workshop where you'll learn how to
              become a better version of...
            </p>
            <h3 className="details">event details</h3>
          </div>
        </article>
      </div>
    );
    // return (
    //   <div className="projectCard">
    //     {/* <div className="projectCardHeader" style={{ backgroundColor: Color }}>
    //       <div className="projectName">{Name}</div>
    //     </div> */}
    //       <div className="projectCardImgDiv">
    //         <img
    //           className="projectCardImg"
    //           src={require(`../../assets/images/ProjectsTitleImages/${ImageFile}`)}
    //         />{" "}
    //       </div>
    //       <div className="projectCardInfoDiv">
    //         <div className="projectName" style={{fontWeight:"bold"}}>{Name}</div>
    //         <div className="projectDescription">{Description}</div>
    //         <div className="projectTechnologies">
    //           <div style={{fontWeight:"bold"}}>Technogies</div>
    //           <img
    //           className="projectTechnologyImg"
    //           src={require(`../../assets/images/TechnologyIcons/angular.png`)}
    //         />{" "}
    //         <img
    //           className="projectTechnologyImg"
    //           src={require(`../../assets/images/TechnologyIcons/react.png`)}
    //         />{" "}
    //         </div>
    //       </div>
    //   </div>
    // );
  }
}

export default ProjectCard;
