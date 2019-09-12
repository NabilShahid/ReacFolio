import React, { Component } from "react";
import "./navbar.css";
class Navbar extends Component {
  state = {
    options:  {
        "home":{
            Display:"HOME",
            Active:true
        },
        "articles":{
            Display:"ARTICLES",
            Active:false
        },
        "portfolio":{
            Display:"PORTFOLIO",
            Active:false
        },
        "about":{
            Display:"ABOUT",
            Active:false
        },
        "contact":{
            Display:"CONTACT",
            Active:false
        },
    }
  };
  setActive(op){
    let {options}=this.state;
    Object.keys(options).forEach(op => {
        options[op].Active=false;
    });
    options[op].Active=true;
    this.setState({options});
  }
  render() {
    const { options } = this.state;
    const {changeFullpageSlide}=this.props;
    return (
      <div className="container  brackets">
        {Object.keys(options).map((op,i) => (
          <a
            className={(options[op].Active?"selectedNavItem":"")}
            onClick={() => {
            changeFullpageSlide(i)
              this.setActive(op);
            }}
          >
            {options[op].Display}
          </a>
        ))}
      </div>
    );
  }
}

export default Navbar;
