import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as Graduation } from "../../assets/svgs/college-graduation.svg";
import { ReactComponent as Work } from "../../assets/svgs/briefcase.svg";
import { ReactComponent as Start } from "../../assets/svgs/power.svg";

import "./experiencepage.css";
class ExperiencePage extends Component {
  state = {};
  render() {
    return (
      <div id="experiencePage">
        <div className="pageHeader">
        <span className="pageHeaderText">
            Experience
        </span>
      </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "var(--color-1)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  var(--color-2)" }}
            date="2019 - Present"
            iconStyle={{
              background: "var(--color-5)",
              color: "white",
              fill: "white"
            }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">
              FullStack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              AuxilioTech 
            </h4>
            <div className="experiencePageLocation">
                Islamabad, Pakistan
            </div>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2019"
            contentStyle={{ borderTop: "3px solid var(--color-5)" }}
            iconStyle={{ background: "#8f9090", color: "white", fill: "white" }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">
              FullStack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">AbbVie Inc.</h4>
            <div className="experiencePageLocation">
                Islamabad, Pakistan
            </div>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015"
            contentStyle={{ borderTop: "3px solid var(--color-5)" }}
            iconStyle={{ background: "#8f9090", color: "#fff", fill: "white" }}
            icon={<Graduation />}
          >
            <h3 className="vertical-timeline-element-title">
              Computer Scientist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              National University of Computer and Emerging Sciences Islamabad
              (FAST)
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2011"
            iconStyle={{
              background: "var(--color-5)",
              color: "#fff",
              fill: "white"
            }}
            icon={<Start />}
          />
        </VerticalTimeline>
      </div>
    );
  }
}

export default ExperiencePage;
