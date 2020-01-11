import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as Graduation } from "../../assets/svgs/college-graduation.svg";
import { ReactComponent as Work } from "../../assets/svgs/briefcase.svg";
import { ReactComponent as Start } from "../../assets/svgs/power.svg";
import { ReactComponent as LinkIcon } from "../../assets/svgs/external-link-symbol.svg";

import "./experiencepage.css";
const openUrl = link => {
  window.open(link, "_blank");
};
class ExperiencePage extends Component {
  state = {};
  render() {
    return (
      <div id="experiencePage">
        <div className="pageHeader">
          <span className="pageHeaderText">Experience</span>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "var(--color-1)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  var(--color-2)" }}
            date="Aug 2019 - Present"
            iconStyle={{
              background: "var(--color-5)",
              color: "white",
              fill: "white"
            }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">AuxilioTech</h4>
            <div className="experiencePageLocation">Islamabad, Pakistan</div>
            <p>
              Working as lead developer on the company's flagship software
              product.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2016 - Aug 2019"
            contentStyle={{ borderTop: "3px solid var(--color-5)" }}
            iconStyle={{ background: "#737373", color: "white", fill: "white" }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h4
              onClick={() => openUrl("http://www.abbvie.com")}
              style={{cursor:"pointer"}}
              className="vertical-timeline-element-subtitle"
            >
              AbbVie Inc.
              <LinkIcon className="homeLink" />
            </h4>
            <div className="experiencePageLocation">Islamabad, Pakistan</div>
            <p>
              Worked on various projects related to business workflows
              automation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2011 - July 2015"
            contentStyle={{ borderTop: "3px solid var(--color-5)" }}
            iconStyle={{ background: "#737373", color: "#fff", fill: "white" }}
            icon={<Graduation />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science (Computer Science)
            </h3>
            <h4
              onClick={() => openUrl("http://nu.edu.pk")}
              style={{cursor:"pointer"}}
              className="verticaertical-timeline-element-subtitle"
            >
              National University of Computer and Emerging Sciences (FAST)
              <LinkIcon className="homeLink" />
            </h4>
            <div className="experiencePageLocation">Islamabad, Pakistan</div>

            {/* <p>Graduated as Bachelor of Science </p> */}
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
