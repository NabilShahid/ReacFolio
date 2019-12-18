import React from "react";
import "./userinfo.css";
import { ReactComponent as Code } from "../../assets/svgs/programming-code-signs.svg";

const UserInfo = ({ userName }) => {
  return (
    <div id="userInfoDiv">
      <Code
        style={{
          width: "30px",
          height: "30px",
          marginBottom: "5px",
          fill: "white"
        }}
      />
      <span id="userName">{userName}</span>
    </div>
  );
};

export default UserInfo;
