import React, { Component } from "react";
import "./navbar.css";
class Navbar extends Component {
  state = {
    options: ["Home", "Articles", "Portfolio", "About", "Contacts"]
    };
  render() {
    const { options } = this.state;
    const { changeFullpageSlide,outsideSlideChange,activeIndex } = this.props;
    return (
      <div className="container  brackets">
        {options.map((op, i) => (
          <a
            className={activeIndex == i ? "selectedNavItem" : ""}
            onClick={() => {
              changeFullpageSlide(i);
              outsideSlideChange(i);
            }}
          >
            {op}
          </a>
        ))}
      </div>
    );
  }
}

export default Navbar;
