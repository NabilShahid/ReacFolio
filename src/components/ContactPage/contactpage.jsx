import React from "react";
import { ReactComponent as EmailIcon } from "../../assets/svgs/email.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svgs/telephone.svg";
import ContactForm from "../ContactForm/contactform";
import FadeReveal from "react-reveal/Zoom";

import "./contactpage.css";
const contactIconsStyle = {
  height: "25px",
  width: "25px",
  fill: "var(--color-5)"
};
let currentAnimSpy = 0;
const Contact = ({ activeIndex, pageIndex }) => {
  if (activeIndex == pageIndex) currentAnimSpy++;
  return (
    <div id="contactPage">
      <div className="pageHeader">
        <span className="pageHeaderText">Contact</span>
      </div>
      <FadeReveal duration={500} spy={currentAnimSpy}>
        <div className="contactTypes">
          <div className="contactType">
            <EmailIcon style={contactIconsStyle} />
            <span className="contactText">nabil110176@gmail.com</span>
          </div>
          <div className="contactType">
            <PhoneIcon style={contactIconsStyle} />
            <span className="contactText">+923477363136</span>
          </div>
        </div>
      </FadeReveal>

      <FadeReveal delay={300} duration={500} spy={currentAnimSpy}>
      <div className="contactFormContainer">

        <ContactForm />
      </div>
        </FadeReveal>
    </div>
  );
};

export default Contact;
