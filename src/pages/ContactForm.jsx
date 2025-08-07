import React, { useState } from 'react';
import './ContactForm.css';
import contactImg from '../assets/telephone.jpg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const [failureMessage, setFailureMessage] = useState('');

  // Validation functions
  const validateFullName = (name) => {
    const nameRegex = /^[a-zA-Z\u0600-\u06FF\s]{2,50}$/;
    return nameRegex.test(name.trim());
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const validateMessage = (message) => {
    return message.trim().length >= 10 && message.trim().length <= 1000;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle input blur for validation
  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (value) {
      switch (name) {
        case 'fullName':
          if (!validateFullName(value)) {
            newErrors[name] = 'Name must be between 2-50 characters and contain only letters';
          } else {
            delete newErrors[name];
          }
          break;
        case 'email':
          if (!validateEmail(value)) {
            newErrors[name] = 'Please enter a valid email address (example: user@domain.com)';
          } else {
            delete newErrors[name];
          }
          break;
        case 'message':
          if (!validateMessage(value)) {
            newErrors[name] = 'Message must be between 10-1000 characters';
          } else {
            delete newErrors[name];
          }
          break;
        default:
          break;
      }
    }

    setErrors(newErrors);
  };

  // Simulate sending data to backend
  const sendToBackend = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate processing the data
        console.log('Sending data:', data);
        resolve({ success: true });
      }, 1500);
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    
    if (!validateFullName(formData.fullName)) {
      newErrors.fullName = 'Name must be between 2-50 characters and contain only letters';
    }
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address (example: user@domain.com)';
    }
    
    if (!validateMessage(formData.message)) {
      newErrors.message = 'Message must be between 10-1000 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowFailure(true);
      setFailureMessage('Please correct the errors in the form');
      setTimeout(() => setShowFailure(false), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      const dataToSend = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        timestamp: new Date().toISOString()
      };

      const result = await sendToBackend(dataToSend);

      if (result.success) {
        setShowSuccess(true);
        setFormData({ fullName: '', email: '', message: '' });
        setErrors({});
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      setShowFailure(true);
      setFailureMessage('An unexpected error occurred');
      setTimeout(() => setShowFailure(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact_container ">
      {/* Left Section - Image */}
      <div className="left-section">
        <div className="image-container">
          <img src={contactImg} alt="Contact Us" />
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="right-section">
        <div className="contact-container">
          <h1 className="contact-title">Contact Us</h1>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                placeholder="Full Name"
                className={errors.fullName ? 'error' : ''}
              />
              <div className="input-underline"></div>
              {errors.fullName && <div className="error-message">{errors.fullName}</div>}
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                placeholder="E-mail"
                className={errors.email ? 'error' : ''}
              />
              <div className="input-underline"></div>
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                placeholder="Message"
                rows="4"
                className={errors.message ? 'error' : ''}
              ></textarea>
              <div className="input-underline"></div>
              {errors.message && <div className="error-message">{errors.message}</div>}
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Contact Us'}
            </button>
          </form>

          <div className="contact-info">
            <div className="info-section">
              <h3>Contact</h3>
              <p>fashion@gmail.com</p>
            </div>
            
            <div className="info-section">
              <h3>Based in</h3>
              <p>Egypt,<br />Cairo,<br />Helwan</p>
            </div>
            
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="success-message">
          <div className="success-content">
            <i className="fas fa-check-circle"></i>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you, we'll get back to you soon</p>
          </div>
        </div>
      )}

      {/* Failure Message */}
      {showFailure && (
        <div className="failure-message">
          <div className="failure-content">
            <i className="fas fa-times-circle"></i>
            <h3>Failed to Send Message</h3>
            <p>{failureMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm; 