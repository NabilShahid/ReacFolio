import React, { Component } from "react";
import UserBadge from "../UserInfo/userinfo";
import { ReactComponent as Menu } from "../../assets/svgs/menu.svg";
import Flash from "react-reveal/Fade";

import "./navbar.css";
class Navbar extends Component {
  state = {
    options: [
      {
        refName: "homePage",
        label: "Home",
      },
      {
        refName: "aboutPage",
        label: "About",
      },
      {
        refName: "projectsPage",
        label: "Work",
      },
      {
        refName: "experiencePage",
        label: "Experience",
      },
      {
        refName: "contactPage",
        label: "Contact",
      },
    ],
    options1: ["Home", "About", "Projects", "Experience", "Contact"],
    expandableMenuShown: false,
  };
  navbarHeight = "51px";
  render() {
    const { options, expandableMenuShown } = this.state;
    const { activeIndex, scrollToRef, scrollToHome } = this.props;
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light "
          style={{ height: this.navbarHeight }}
        >
          <UserBadge scrollToHome={scrollToHome} userName="Nabil Shahid" />

          <div
            className="nav-bar-toggle-button"
            onClick={() =>
              this.setState({ expandableMenuShown: !expandableMenuShown })
            }
          >
            <Menu style={{ height: "20px", width: "20px", fill: "white" }} />
          </div>
          <Flash top exit={true} duration={300}>
            <div
              className={
                "collapse navbar-collapse " +
                (expandableMenuShown ? "show" : "")
              }
            >
              <div className="navbar-nav">
                {options.map((op, index) => (
                  <button
                    key={op.refName}
                    className={
                      "nav-button " +
                      (activeIndex === index ? "selected-nav-item" : "")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ expandableMenuShown: false });
                      scrollToRef(op.refName, index);
                    }}
                  >
                    {op.label}
                  </button>
                ))}
              </div>
            </div>
          </Flash>
        </nav>
        <div
          style={{ height: this.navbarHeight }}
          className={
            "opacity-animation " + (activeIndex === 0 && "navbar-first-page")
          }
        ></div>
      </div>
    );
  }
}

export default Navbar;
