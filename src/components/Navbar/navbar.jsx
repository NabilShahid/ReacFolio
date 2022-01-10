/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import UserInfo from "../UserInfo/userinfo";
import { ReactComponent as Menu } from "../../assets/svgs/menu.svg";
import Flash from "react-reveal/Fade";

import "./navbar.css";
class Navbar extends Component {
  state = {
    options: [
      {
        refName: "homePage",
        label: "Home"
      },
      {
        refName: "aboutPage",
        label: "About"
      },
      {
        refName: "projectsPage",
        label: "Work"
      },
      {
        refName: "experiencePage",
        label: "Experience"
      },
      {
        refName: "contactPage",
        label: "Contact"
      },
    ],
    options1: ["Home", "About", "Projects", "Experience", "Contact"],
    expandableMenuShown: false
  };
  navbarHeight="51px";
  render() {
    const { options, expandableMenuShown } = this.state;
    const { activeIndex, scrollToRef,scrollToHome } = this.props;
    return (
      <div className="brackets">
        <nav
          className=
            "navbar navbar-expand-lg navbar-light " 
          style={{height:this.navbarHeight}}
            
          
        >
          <UserInfo scrollToHome={scrollToHome}  userName="Nabil Shahid" />

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
                "collapse navbar-collapse " +
                (expandableMenuShown ? "show" : "")
              }
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                {options.map((op, index) => (
                  <a
                    className={
                      "navLink " +
                      (activeIndex == index ? "selectedNavItem" : "")
                    }
                    onClick={() => {
                      // changeFullpageSlide(i);
                      // outsideSlideChange(i);
                      console.log(this.props.references, op.refName, index);
                      this.setState({ expandableMenuShown: false });

                      scrollToRef(op.refName, index);
                    }}
                  >
                    {op.label}
                  </a>
                ))}
              </div>
            </div>
          </Flash>
        </nav>
        <div style={{height:this.navbarHeight}} className={"opacityAnimDiv "+(activeIndex == 0 && "navbarFirstPage")}>

        </div>
      </div>
    );
  }
}

export default Navbar;
