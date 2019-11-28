import React from "react";
import "./iconbutton.css";
const IconButton = ({ Icon, Style, Link }) => {
  return (
    <a className="iconButtonLink" href={Link} target="_blank">
      <div className="iconButton">
        <Icon style={Style} />
      </div>
    </a>
  );
};

export default IconButton;
