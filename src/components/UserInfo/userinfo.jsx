import React from "react";
import "./userinfo.css";
import { ReactComponent as Code } from "../../assets/svgs/programming-code-signs.svg";

const UserBadge = ({ userName, scrollToHome }) => {
  return (
    <button className="user-badge" onClick={scrollToHome}>
      <Code
        style={{
          width: "30px",
          height: "30px",
          marginBottom: "5px",
          fill: "white",
        }}
      />
      <span className="user-badge-name">{userName}</span>
    </button>
  );
};

export default UserBadge;
