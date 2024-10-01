import React from 'react'
import './Footer.css'
import logo from '../Assets/CVReformatter.png'
import { useState } from 'react'

export const Foooter = () => {
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
    <div className="container1">
        <div className="footer-flex">
            <div className="cd6">
                <div className="footer-lgo">
                    <img src={logo} alt="" />
                </div>
                <h3>Sign up and stay in the Loop!</h3>
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
            <div className="cd2">
                <a href="/" className='footer-link'>Home</a>
                <a href="/About" className='footer-link'>About</a>
                <a href="/ContactUs" className='footer-link'>Contact</a>
            </div>
            <div className="cd3">
                <a href="#" className='footer-link'>Service Terms</a>
                <a href="#" className='footer-link'>Standard Clauses</a>
                <a href="#" className='footer-link'>Data Processing Agreement</a>
                <a href="#" className='footer-link'>Subprocessors</a>
                <a href="#" className='footer-link'>GDPR Compliance</a>
                <a href="#" className='footer-link'>Use of Personal Data</a>
                <a href="#" className='footer-link'>PII Policy</a>
            </div>
            <div className="blue-link"></div>
            <p className='footer-bottom'> © 2024 CVREFORMATTER. All rights reserved.</p>
        </div>
    </div>
  )
}
