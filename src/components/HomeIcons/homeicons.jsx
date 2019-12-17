import React from "react";
import "./homeicons.css";
import { Icon, InlineIcon } from "@iconify/react";
import { TechologiesIcons } from "../../assets/iconifyicons";
import Flash from "react-reveal/Flash";
import { ReactComponent as Sql } from "../../assets/svgs/sql.svg";

const iconStyle = { width: "50px", height: "50px" };
const durationsFlash = [5500, 6000, 6500, 7000, 7500];

const HomeIcons = () => {
  return (
    <div className="homeIcons">
      <div className="homeIconsTable">
        <Flash duration={durationsFlash[0]} forever={true}>
          <div className="homeIconsRow">
            <div className="homeIconsCol"></div>
            <div className="homeIconsCol"></div>
            <div className="homeIconsCol"></div>
            <div className="homeIconsCol"></div>
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.Angular} />{" "}
            </div>
          </div>
        </Flash>
        <Flash duration={durationsFlash[1]} forever={true}>
          <div className="homeIconsRow">
            <div className="homeIconsCol"></div>
            <div className="homeIconsCol"></div>
            <div className="homeIconsCol"></div>
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.React} />{" "}
            </div>
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.Npm} />{" "}
            </div>
          </div>
        </Flash>
        <Flash duration={durationsFlash[2]} forever={true}>
          <div className="homeIconsRow">
            <div className="homeIconsCol"></div>
            <div className="homeIconsCol"></div>
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.Csharp} />{" "}
            </div>
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.Redux} />{" "}
            </div>
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.Webpack} />{" "}
            </div>
          </div>
        </Flash>
        <Flash duration={durationsFlash[3]} forever={true}>
          <div className="homeIconsRow">
            <div className="homeIconsCol"></div>
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.Nest} />{" "}
            </div>
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.Node} />{" "}
            </div>
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.Postgresql} />{" "}
            </div>
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.Vscode} />{" "}
            </div>
          </div>
        </Flash>
        <Flash duration={durationsFlash[4]} forever={true}>
          <div className="homeIconsRow">
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.Firebase} />{" "}
            </div>
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.Javascript} />{" "}
            </div>
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.Typescript} />{" "}
            </div>
            <div className="homeIconsCol">
              {" "}
              <Sql style={iconStyle} />{" "}
            </div>
            <div className="homeIconsCol">
              {" "}
              <Icon style={iconStyle} icon={TechologiesIcons.Html} />{" "}
            </div>
          </div>
        </Flash>
      </div>      
    </div>
  );
};

export default HomeIcons;
