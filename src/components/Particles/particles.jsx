import React, { Component } from "react";
import { createParticles } from "../../services/particlesJS";

import "./particles.css";
class Particles extends Component {
  state = {};
  componentDidMount() {
    setTimeout(() => {
      createParticles("particles-js");
    }, 200);
  }
  render() {
    return <div id="particles-js"></div>;
  }
}

export default Particles;
