import React from "react";
import Zoom from "react-reveal/Zoom";
import Flip from 'react-reveal/Flip';

const ScrollSection = ({ heading, visible, background }) => {
  return (
    <section className={"cd-section" + (visible ? " visible" : "")}>
      <div style={{ background }}>
        <Flip>
          <p>Markup that will be revealed on scroll</p>
        <h2>{heading}</h2>
        </Flip>
      </div>
    </section>
  );
};

export default ScrollSection;
