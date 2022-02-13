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
    <div className="homeIcons">
      <div className="homeIconsTable">
        <div className="homeIconsRow">
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[0]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Angular}
            />{" "}
          </div>
        </div>

        <div className="homeIconsRow">
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.React}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[3]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Npm}
            />{" "}
          </div>
        </div>

        <div className="homeIconsRow">
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Ionic}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[5]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Redux}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[2]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Webpack}
            />{" "}
          </div>
        </div>

        <div className="homeIconsRow">
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[4]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Nest}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[2]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Node}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Css}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[5]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Vscode}
            />{" "}
          </div>
        </div>

        <div className="homeIconsRow">
          <div className="homeIconsCol"></div>

          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[0]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Firebase}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[3]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Javascript}
            />{" "}
          </div>
          <div className="homeIconsCol">
            <AnimatedIcon
              animDuration={durationsFlash[4]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Postgresql}
            />{" "}
          </div>
          <div className="homeIconsCol">
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Babel}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Html}
            />{" "}
          </div>
        </div>
        <div className="homeIconsRow">
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[0]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Rxjs}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[2]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Csharp}
            />{" "}
          </div>
          <div className="homeIconsCol">
            <AnimatedIcon
              animDuration={durationsFlash[3]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Typescript}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            {/* <Sql styleClass="homeIconLarge" />{" "} */}
            <AnimatedIcon
              animDuration={durationsFlash[1]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Googlecloudfunctions}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <AnimatedIcon
              animDuration={durationsFlash[5]}
              styleClass="homeIconLarge"
              iconType={TechologiesIcons.Git}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <Flash forever={true} duration={durationsFlash[2]}>
              <Sql className="homeIconLarge" />
            </Flash>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIcons;
