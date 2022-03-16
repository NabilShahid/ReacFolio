import React from "react";
import "./homeicons.css";
import { Icon, InlineIcon } from "@iconify/react";
import { TechnologiesIcons } from "../../assets/iconifyicons";
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
              iconType={TechnologiesIcons.Angular}
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
              iconType={TechnologiesIcons.React}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[3]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Npm}
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
              iconType={TechnologiesIcons.Ionic}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[5]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Redux}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[2]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Webpack}
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
              iconType={TechnologiesIcons.Nest}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[2]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Node}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Css}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[5]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Vscode}
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
              iconType={TechnologiesIcons.Firebase}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[3]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Javascript}
            />{" "}
          </div>
          <div className="home-icons-col">
            <AnimatedIcon
              animDuration={durationsFlash[4]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Postgresql}
            />{" "}
          </div>
          <div className="home-icons-col">
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Babel}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Html}
            />{" "}
          </div>
        </div>
        <div className="home-icons-row">
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[0]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Rxjs}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[2]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Csharp}
            />{" "}
          </div>
          <div className="home-icons-col">
            <AnimatedIcon
              animDuration={durationsFlash[3]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Typescript}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            {/* <Sql styleClass="home-icon-large" />{" "} */}
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Googlecloudfunctions}
            />{" "}
          </div>
          <div className="home-icons-col">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[5]}
              styleClass="home-icon-large"
              iconType={TechnologiesIcons.Git}
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
