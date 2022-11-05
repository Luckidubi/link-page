
import { useState } from "react";
export default function Contact() {
  const [checked, setChecked] = useState(false);
  const name = "Dubem Nwodo";
  const handleChange = () => {
    setChecked((c) => !c);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    alert("Thanks for reaching out! You'll recieve an email shortly");
  };
  return (
    <>
      <div className="contact-container">
        <div className="contact-form-container">
          <div className="contact-header-container">
            <div className="contact-header-content">
              <h1>Contact Me</h1>
              <p>
                Hi there, contact me to ask me about anything you have in mind
              </p>
            </div>
          </div>

          <div className="contact-form-content">
            <div className="contact-form-body">
              <form onSubmit={handleSubmit}>
                <div className="contact-form-fields">
                  <div className="contact-form-name-row">
                    <div className="contact-form-first-name">
                      <label>
                        <div id="label">First name</div>
                        <input
                          className="contact-input-style"
                          id="first_name"
                          placeholder="Enter your first name"
                          required
                        />
                      </label>
                      <div id="display"></div>
                    </div>
                    <div className="contact-form-last-name">
                      <label>
                        <div id="label">Last name</div>
                        <input
                          className="contact-input-style"
                          id="last_name"
                          type="text"
                          placeholder="Enter your last name"
                          required
                        />
                      </label>
                      <div id="display"></div>
                    </div>
                  </div>
                  <div className="contact-form-email">
                    <label>
                      <div id="label">Email</div>
                      <input
                        className="contact-input-style"
                        id="email"
                        type="email"
                        placeholder="yourname@email.com"
                        required
                      />
                    </label>
                    <div id="display"></div>
                  </div>
                  <div className="contact-form-message">
                    <label>
                      <div id="label">Message</div>
                      <textarea
                        id="message"
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        required
                      />
                    </label>
                    <div id="display"></div>
                  </div>
                  <div className="contact-form-check-box">
                    <div className="check-input">
                      <input
                        name="check"
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="check-text">
                      <label>
                        You agree to providing your data to {name} who may
                        contact you.
                      </label>
                    </div>
                    <div id="display"></div>
                  </div>
                  <div className="contact-form-submit-btn">
                    <button id="btn__submit" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
