import React from "react";
import { ReactComponent as EmailIcon } from "../../assets/svgs/email.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svgs/telephone.svg";
import ContactForm from "../ContactForm/contactform";
import FadeReveal from "react-reveal/Zoom";
import ProfileLinks from "../ProfileLinks/profilelinks";

import "./contactpage.css";
const contactIconsStyle = {
  height: "24px",
  width: "24px",
  fill: "#585858",
};
const Contact = () => {
  return (
    <div id="contact-page">
      <div className="page-header">
        <h2 className="page-header-text">Contact</h2>
      </div>
      <FadeReveal duration={500}>
        <div className="contact-types">
          <div
            className="page-subtitle-text"
            style={{ marginBottom: "20px", textAlign: "center" }}
          >
            Interested in working together and get amazing things done ?<br />{" "}
            Feel free to contact me.
          </div>
          <div className="contact-type">
            <EmailIcon style={contactIconsStyle} />
            <span className="contact-text">nabil110176@gmail.com</span>
          </div>
          <div className="contact-type">
            <PhoneIcon style={contactIconsStyle} />
            <span className="contact-text">+923477363136</span>
          </div>
          <div className="contact-type">
            <ProfileLinks />
          </div>
        </div>
      </FadeReveal>

      <div className="contact-form-container">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
