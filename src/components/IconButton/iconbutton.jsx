import React from "react";
import "./iconbutton.css";
const IconButton = ({ Icon, Style, Link, Text, onClick }) => {
  return (
    <div className="iconButton buttonHover" onClick={()=>onClick()}>
      <Icon style={Style} />
      {/* <span className="iconButtonText">{Text}</span> */}
    </div>
  );
};

export default IconButton;
