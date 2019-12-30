import React, { Component } from "react";
import "./contactform.css";
class ContactForm extends Component {
  state = {};
  render() {
    return (
      <form className="contactForm">
        <div className="contactFormDiv">
          <div className="contactFormField">
            <div className="contactFormLabel">Name</div>
            <div className="contactFormControl">
              <input className="contactInputField" type="text" />
            </div>
          </div>
          <div className="contactFormField">
            <div className="contactFormLabel">Email</div>
            <div className="contactFormControl">
              <input className="contactInputField" type="text" />
            </div>
          </div>
          <div className="contactFormField">
            <div className="contactFormLabel">Message</div>
            <div className="contactFormControl">
              <textarea
                rows="5"
                className="contactInputField"
                type="text"
              ></textarea>
            </div>
            <div className="contactFormControl" style={{display:"flex",marginTop:"20px"}}>
            <span className="sendMessageButton">Send</span>

            </div>
          </div>
        </div>

      </form>
    );
  }
}

export default ContactForm;
