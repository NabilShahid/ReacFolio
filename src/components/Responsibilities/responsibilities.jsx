import React from "react";
import "./responsibilities.css"
const Responsibilities = ({ responsibilities }) => {
  return (
    <ul className="responsibilities-list">
      {responsibilities.map((responsibility) => (
        <li>{responsibility}</li>
      ))}
    </ul>
  );
};
export default Responsibilities;
