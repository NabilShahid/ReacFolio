import React, { Component } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import FadeReveal from "react-reveal/Zoom";

import "./contactform.css";
class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };
  showToastInfoMessage = (message) => {
    toast.info(message);
  };
  showToastErrorMessage = (message) => {
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

  setFieldValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <form onSubmit={this.sendEmail} className="contact-form">
        <div className="contactFormDiv">
          <FadeReveal delay={200} duration={500}>
            <div className="contact-form-field">
              <div className="contact-form-label">Name</div>
              <div className="contact-form-control">
                <input
                  value={name}
                  onInput={this.setFieldValue}
                  name="name"
                  className="contact-input-field"
                  type="text"
                />
              </div>
            </div>
          </FadeReveal>
          <FadeReveal delay={200} duration={500}>
            <div className="contact-form-field">
              <div className="contact-form-label">Email</div>
              <div className="contact-form-control">
                <input
                  value={email}
                  onInput={this.setFieldValue}
                  name="email"
                  className="contact-input-field"
                  type="text"
                />
              </div>
            </div>
          </FadeReveal>
          <FadeReveal delay={200} duration={500}>
            <div className="contact-form-field">
              <div className="contact-form-label">Message</div>
              <div className="contact-form-control">
                <textarea
                  name="message"
                  rows="4"
                  value={message}
                  className="contact-input-field"
                  type="text"
                  onInput={this.setFieldValue}
                ></textarea>
              </div>
              <div
                className="contact-form-control"
                style={{ display: "flex", marginTop: "20px" }}
              >
                <span
                  onClick={this.sendEmail}
                  className="send-message-button button-hover"
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
