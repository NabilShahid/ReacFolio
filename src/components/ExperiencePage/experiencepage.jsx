import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Responsibilities from "../Responsibilities/responsibilities";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as Graduation } from "../../assets/svgs/college-graduation.svg";
import { ReactComponent as Work } from "../../assets/svgs/briefcase.svg";
import { ReactComponent as Start } from "../../assets/svgs/power.svg";
import { EXPERIENCE } from "../../constants";
import "./experiencepage.css";

const timelineItemStyles = {
  currentlyWorking: {
    contentStyle: {
      background: "var(--color-5)",
      color: "#fff",
      borderTop: "3px solid var(--color-5)",
    },
    contentArrowStyle: { borderRight: "7px solid  var(--color-2)" },
    iconStyle: {
      background: "var(--color-5)",
      color: "white",
      fill: "white",
    },
  },
  previouslyWorked: {
    contentStyle: { borderTop: "3px solid var(--color-5)" },
    contentArrowStyle: {},
    iconStyle: { background: "var(--color-1)", color: "white", fill: "white" },
  },
};
class ExperiencePage extends Component {
  state = {};
  render() {
    return (
      <div id="experience-page">
        <div className="page-header">
          <h2 className="page-header-text">Work</h2>
        </div>
        <VerticalTimeline>
          {EXPERIENCE.map((exp, index) => {
            const itemStyle =
              index === 0
                ? timelineItemStyles.currentlyWorking
                : timelineItemStyles.previouslyWorked;
            const Icon = index === EXPERIENCE.length - 1 ? Graduation : Work;
            return (
              <VerticalTimelineElement
                className={`vertical-timeline-element--work ${
                  index === 0 ? "ignore-global-text-color" : ""
                }`}
                contentStyle={itemStyle.contentStyle}
                contentArrowStyle={itemStyle.contentArrowStyle}
                date={exp.Date}
                iconStyle={itemStyle.iconStyle}
                icon={<Icon />}
              >
                <h3 className="vertical-timeline-element-title">{exp.Title}</h3>
                <a className="company-link" href={exp.CompanyWebsiteUrl}>
                  <h5 className="vertical-timeline-element-subtitle">
                    {exp.Company}
                  </h5>
                </a>
                <p className="experience-page-location">{exp.Location}</p>
                {exp.Responsibilities && (
                  <div className="responsibilities-list-container">
                    <Responsibilities responsibilities={exp.Responsibilities} />
                  </div>
                )}
              </VerticalTimelineElement>
            );
          })}

          <VerticalTimelineElement
            date="2011"
            iconStyle={{
              background: "var(--color-5)",
              color: "#fff",
              fill: "white",
            }}
            icon={<Start />}
          />
        </VerticalTimeline>
      </div>
    );
  }
}

export default ExperiencePage;
