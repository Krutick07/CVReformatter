import React, { useState } from 'react';
import './Section9.css';

export default function Section9() {
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState(''); // '' for no status, 'success' for correct, 'fail' for incorrect

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setFormStatus('success'); // Set to success when email is valid
    } else {
      setFormStatus('fail'); // Set to fail when email is invalid
    }
  };

  return (
    <div className="container">
      <div className="newsletter-flex">
        <div className="newsletter-left">
          <h3>
            We are building more exciting time-saving services for HR professionals
            and job seekers
          </h3>
          <strong>Sign up and stay in the Loop!</strong>
        </div>
        <div className="newsletter-right">
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input type="submit" value="Submit" />
          </form>
          {formStatus === 'success' && (
            <div className="form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
          )}
          {formStatus === 'fail' && (
            <div className="form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
