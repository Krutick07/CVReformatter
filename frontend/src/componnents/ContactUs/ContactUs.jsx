import React, { useState } from 'react';
import './ContactUs.css';
import { Section10 } from '../Section10/Section10';

export const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formValid, setFormValid] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState({
      ...formState,
      [id]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const { name, companyName, email, phone } = formState;
    
    // Basic validation: Name and Company Name should be non-empty
    const isNameValid = name.trim() !== '';
    const isCompanyNameValid = companyName.trim() !== '';
    
    // Simple email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(email);
    
    // Assuming 10-digit phone number (can be adjusted)
    const phonePattern = /^\d{10}$/;
    const isPhoneValid = phonePattern.test(phone);

    return isNameValid && isCompanyNameValid && isEmailValid && isPhoneValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    setFormValid(isValid);
    setIsFormSubmitted(true);
  };

  return (
    <>
    <div className='container'>
      <div className="contact-hero">
        <div className="contact-herp-text">
          <h1>Contact Us</h1>
          <p>We would love to hear from you. 
            Interested in how CV Reformatter can help your organization? 
            Drop us a line.
          </p>
        </div>
        <div className="form-container">
          <div className="w-form">
            <form id='contact-form' onSubmit={handleSubmit}>
              <div className="form-flex">
                <div className="form-input">
                  <label htmlFor='name'>Name</label>
                  <input type="text" id='name' required className='form-feild' value={formState.name} onChange={handleChange} />
                </div>
                <div className="form-input">
                  <label htmlFor='companyName'>Company Name</label>
                  <input type="text" id='companyName' required className='form-feild' value={formState.companyName} onChange={handleChange} />
                </div>
                <div className="form-input">
                  <label htmlFor='email'>Business Email</label>
                  <input type='email' id='email' required className='form-feild' value={formState.email} onChange={handleChange} />
                </div>
                <div className="form-input">
                  <label htmlFor='phone'>Phone</label>
                  <input type="tel" id='phone' required className='form-feild' value={formState.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="message-block">
                <label htmlFor='message'>Message</label>
                <textarea className='form-feild' id="message" value={formState.message} onChange={handleChange}></textarea>
              </div>
              <input type="submit" value="Submit" className='w-button' />
            </form>

            {/* Show form-done or form-fail based on form submission */}
            {isFormSubmitted && formValid && (
              <div className="form-done show">Thank you! Your submission has been received!</div>
            )}

            {isFormSubmitted && !formValid && (
              <div className="form-fail show">Oops! Something went wrong while submitting the form. Please check your inputs.</div>
            )}
          </div>
        </div>
      </div>
    </div>

    <Section10/>
    </>
  );
}
