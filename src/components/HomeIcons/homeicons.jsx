import React from "react";
import "./homeicons.css";
import { Icon, InlineIcon } from "@iconify/react";
import { TechologiesIcons } from "../../assets/iconifyicons";
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

const iconStyle={width:'50px',height:'50px'}

const HomeIcons = () => {
  return (
    <div className="homeIcons">
        {/* <div className="homeIconsBorder">
    
        </div> */}
        

        
      <div className="homeIconsTable">
      <Pulse duration={2800} forever={true}>
        <div className="homeIconsRow">
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.Angular}
            />{" "}
          </div>
        </div>
        </Pulse>
        <Pulse duration={3100} forever={true}>
        <div className="homeIconsRow">
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.React}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.Npm}
            />{" "}
          </div>
        </div>
        </Pulse>
        <Pulse duration={3400} forever={true}>
        <div className="homeIconsRow">
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.Csharp}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.Redux}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.Angular}
            />{" "}
          </div>
        </div>
        </Pulse>
        <Pulse duration={3700} forever={true}>
        <div className="homeIconsRow">
          <div className="homeIconsCol"></div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.Nest}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.Node}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.Postgresql}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.Vscode}
            />{" "}
          </div>
        </div>
        </Pulse>
        <Pulse duration={4000} forever={true}>
        <div className="homeIconsRow">
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.Firebase}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.React}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.Javascript}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.Csharp}
            />{" "}
          </div>
          <div className="homeIconsCol">
            {" "}
            <Icon
              style={iconStyle}
              icon={TechologiesIcons.Angular}
            />{" "}
          </div>
        </div>
        </Pulse>
       </div>
      {/* <Icon
        style={iconStyle}
        icon={TechologiesIcons.Angular}
      />
      <Icon
        style={{ width: "60px", height: "60px" }}
        icon={TechologiesIcons.React}
      />
      <Icon
        style={{ width: "60px", height: "60px" }}
        icon={TechologiesIcons.Firebase}
      /> */}
    
    </div>
  );
};

export default HomeIcons;
