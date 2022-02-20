import React from "react";
import "./homeicons.css";
import { Icon, InlineIcon } from "@iconify/react";
import { TechologiesIcons } from "../../assets/iconifyicons";
import Flash from "react-reveal/Flash";
import AnimatedIcon from "../AnimatedIcon/animatedicon";
import { ReactComponent as Sql } from "../../assets/svgs/sql.svg";

const durationsFlash = [6000, 7000, 8000, 9000, 10000, 11000];

const HomeIcons = () => {
  return (
    <div className="home-icons">
      <div className="home-icons-table">
        <div className="home-icons-row">
          <div className="home-icons-col"></div>
          <div className="home-icons-col"></div>
          <div className="home-icons-col"></div>
          <div className="home-icons-col"></div>
          <div className="home-icons-col"></div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[0]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Angular}
            />{" "}
          </div>
        </div>

        <div className="home-icons-row">
          <div className="home-icons-col"></div>
          <div className="home-icons-col"></div>
          <div className="home-icons-col"></div>
          <div className="home-icons-col"></div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.React}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[3]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Npm}
            />{" "}
          </div>
        </div>

        <div className="home-icons-row">
          <div className="home-icons-col"></div>
          <div className="home-icons-col"></div>
          <div className="home-icons-col"></div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Ionic}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[5]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Redux}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[2]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Webpack}
            />{" "}
          </div>
        </div>

        <div className="home-icons-row">
          <div className="home-icons-col"></div>
          <div className="home-icons-col"></div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[4]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Nest}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[2]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Node}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Css}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[5]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Vscode}
            />{" "}
          </div>
        </div>

        <div className="home-icons-row">
          <div className="home-icons-col"></div>

          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[0]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Firebase}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[3]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Javascript}
            />{" "}
          </div>
          <div className="home-icons-col">
            <AnimatedIcon
              animDuration={durationsFlash[4]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Postgresql}
            />{" "}
          </div>
          <div className="home-icons-col">
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Babel}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Html}
            />{" "}
          </div>
        </div>
        <div className="home-icons-row">
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[0]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Rxjs}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[2]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Csharp}
            />{" "}
          </div>
          <div className="home-icons-col">
            <AnimatedIcon
              animDuration={durationsFlash[3]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Typescript}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            {/* <Sql styleClass="home-icon-large" />{" "} */}
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Googlecloudfunctions}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[5]}
              styleClass="home-icon-large"
              iconType={TechologiesIcons.Git}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <Flash forever={true} duration={durationsFlash[2]}>
              <Sql className="home-icon-large" />
            </Flash>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIcons;
