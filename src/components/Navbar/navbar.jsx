/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import UserInfo from "../UserInfo/userinfo";
import { ReactComponent as Menu } from "../../assets/svgs/menu.svg";
import Flash from "react-reveal/Fade";

import "./navbar.css";
class Navbar extends Component {
  state = {
    options: ["Home", "About", "Projects", "Experience", "Contact"],
    expandableMenuShown: false
  };
  render() {
    const { options, expandableMenuShown } = this.state;
    const { changeFullpageSlide, outsideSlideChange, activeIndex } = this.props;
    return (
      <div className="brackets">
        <nav
          className={
            "navbar navbar-expand-lg navbar-light " +
            (activeIndex == 0 && "navbarFirstPage")
          }
        >
          <UserInfo userName="Nabil Shahid" />
          
          
          <div
            className="navBarToggleButton"
            onClick={() =>
              this.setState({ expandableMenuShown: !expandableMenuShown })
            }
          >
            <Menu style={{ height: "20px", width: "20px", fill: "white" }} />
          </div>
          <Flash top exit={true} duration={300}>
          <div
            className={
              "collapse navbar-collapse " + (expandableMenuShown ? "show" : "")
            }
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              {options.map((op, i) => (
                <a
                  className={
                    "navLink " + (activeIndex == i ? "selectedNavItem" : "")
                  }
                  onClick={() => {
                    changeFullpageSlide(i);
                    outsideSlideChange(i);
                    this.setState({ expandableMenuShown: false });
                  }}
                >
                  {op}
                </a>
              ))}
            </div>
          </div>
          </Flash>
        </nav>
      </div>
    );
  }
}

export default Navbar;
