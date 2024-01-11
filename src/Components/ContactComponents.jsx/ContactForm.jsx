import React from "react";
import api from "../../data/api"

function ContactForm() {
  const handleFormSubmit = () => {
    
  }

  return (
    <div className="contact-form">
      <div className="left-side contact-container">
        <div className="title">
          <p>Send us a feedback</p>
          <hr />
          <a>
            Your feedback is extremely important to us, share your opinions and
            thoughts below
          </a>
        </div>
        <div className="form">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              className="name-input"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              className="email-input"
            />
          </div>
          <div className="message-input">
            <textarea
              id="message"
              name="message"
              placeholder="your message"
            ></textarea>
          </div>
          <div className="button">
            <button type="submit">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
