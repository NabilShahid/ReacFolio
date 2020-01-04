import React, { Component } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import FadeReveal from "react-reveal/Fade";

import "./contactform.css";
class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  showToastInfoMessage = message => {
    toast.info(message);
  };
  showToastErrorMessage = message => {
    toast(message);
  };

  sendEmail = () => {
    const { name, email, message } = this.state;
    if (!name) {
      this.showToastErrorMessage("Please provide your name");
      return;
    }
    if (!email) {
      this.showToastErrorMessage("Please provide your email");
      return;
    }
    if (!message) {
      this.showToastErrorMessage("Please provide your message");
      return;
    }
    this.showToastInfoMessage("Message Sent! I will try to get back asap");
  };

  setFieldValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { currentAnimSpy } = this.props;
    const { name, email, message } = this.state;

    return (
      <form onSubmit={this.sendEmail} className="contactForm">
        <div className="contactFormDiv">
          <FadeReveal right delay={200} duration={500} spy={currentAnimSpy}>
            <div className="contactFormField">
              <div className="contactFormLabel">Name</div>
              <div className="contactFormControl">
                <input
                  value={name}
                  onInput={this.setFieldValue}
                  name="name"
                  className="contactInputField"
                  type="text"
                />
              </div>
            </div>
          </FadeReveal>
          <FadeReveal right delay={200} duration={500} spy={currentAnimSpy}>
            <div className="contactFormField">
              <div className="contactFormLabel">Email</div>
              <div className="contactFormControl">
                <input
                  value={email}
                  onInput={this.setFieldValue}
                  name="email"
                  className="contactInputField"
                  type="text"
                />
              </div>
            </div>
          </FadeReveal>
          <FadeReveal right delay={200} duration={500} spy={currentAnimSpy}>
            <div className="contactFormField">
              <div className="contactFormLabel">Message</div>
              <div className="contactFormControl">
                <textarea
                  name="message"
                  rows="4"
                  value={message}
                  className="contactInputField"
                  type="text"
                  onInput={this.setFieldValue}
                ></textarea>
              </div>
              <div
                className="contactFormControl"
                style={{ display: "flex", marginTop: "20px" }}
              >
                <span
                  onClick={this.sendEmail}
                  className="sendMessageButton buttonHover"
                >
                  Send
                </span>
              </div>
            </div>
          </FadeReveal>
        </div>  
      </form>
    );
  }
}

export default ContactForm;
