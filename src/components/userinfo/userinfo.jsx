import React from "react";
import CvPic from "../../../src/assets/images/download.png";
import "./userinfo.css";

const UserInfo = ({ userName }) => {
  return (
    <div id="userInfoDiv">
      <div style={{ display: "inline-block" }} id="userImage">
        {/* <img id="userImage" src={CvPic} /> */}
      </div>
      <span id="userName">{userName}</span>
    </div>
  );
};

export default UserInfo;
