import React from "react";
import "./iconbutton.css";
const IconButton = ({
  Icon,
  IconStyle,
  Style,
  onClick = () => {},
  children,
}) => {
  return (
    <button
      className="icon-button button-hover"
      style={Style}
      onClick={() => onClick()}
    >
      <Icon style={IconStyle} />
      {children && <span className="icon-button-text">{children}</span>}
    </button>
  );
};

export default IconButton;
