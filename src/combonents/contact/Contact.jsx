import React, { useState } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending the data to an API
    console.log(formData); // For demonstration purposes; replace with your logic
  };
  return (
    <div>
      <div>
        <div class="contact-section" id="contact">
          <div className="container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        
          <div className="social-btn">
            <div className="service-text">
              <h2>Follow Us</h2>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                consectetur temporibus{" "}
              </p>
              <div class="unde-line"></div>
              <div class="social-media">
                <i class="fa-brands fa-instagram fa-2x"></i>
                <i class="fa-brands fa-twitter fa-2x"></i>
                <i class="fa-brands fa-linkedin fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
