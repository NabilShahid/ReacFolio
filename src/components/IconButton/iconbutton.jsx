import React from "react";
import "./iconbutton.css";
const IconButton = ({
  Icon,
  IconStyle,
  Style,
  Title,
  TextStyle,
  onClick = () => {},
  children,
}) => {
  return (
    <button
      className="icon-button button-hover"
      style={Style}
      onClick={onClick}
      title={Title}
    >
      <Icon style={IconStyle} />
      {children && (
        <span style={TextStyle} className="icon-button-text">
          {children}
        </span>
      )}
    </button>
  );
};

export default IconButton;
