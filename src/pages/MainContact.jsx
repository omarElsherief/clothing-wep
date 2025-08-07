// src/components/ContactSection.js
import { Link } from 'react-router-dom';
import React from 'react';
import './MainContact.css'; 
import contactImage from '../assets/Online world-pana.png';

const ContactSection = () => {
  return (
    <div className="contact_section">
      <div className="contact_text">
        <h1>Contact Us</h1>
        <p>We’re always happy to hear from you!</p>
        <p>If you’ve got any questions feel free to contact us</p>
        <Link to="/contact-form" className="btn">Contact us</Link>
      </div>

      <div className="contact-img">
        <img src={contactImage} alt="Contact Illustration" />
      </div>
    </div>
  );
};

export default ContactSection;

