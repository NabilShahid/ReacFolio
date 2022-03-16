import React from "react";
import "./userinfo.css";
import { ReactComponent as Code } from "../../assets/svgs/programming-code-signs.svg";

const UserInfo = ({ userName, scrollToHome }) => {
  return (
    <div className="user-info-section" onClick={scrollToHome}>
      <Code
        style={{
          width: "30px",
          height: "30px",
          marginBottom: "5px",
          fill: "white",
        }}
      />
      <span className="user-info-section-name">{userName}</span>
    </div>
  );
};

export default UserInfo;
