import React from "react";
import "./iconbutton.css";
const IconButton = ({ Icon, Style, Link, Text }) => {
  return (
    <div className="iconButton">
      <Icon style={Style} />
      <span className="iconButtonText">{Text}</span>
    </div>
  );
};

export default IconButton;
