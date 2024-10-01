import React from 'react';
import './Hero.css';
import tick from '../Assets/T1.png';
import arrow from '../Assets/Arrow.svg';
import hero_image from '../Assets/image.png'


export const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            <span>
              Save Time <br />
              Perfectly Reformat CVs 75% Faster
            </span>
          </h1>
          <p>
            Perfectly Parse and Reformat CVs to accelerate your business
          </p>

          <div className="list-wrapper">
            <div className="list-item">
              <div className="list-icon">
                <img src={tick} alt="tick" />
              </div>
              <p>AI Assisted parsing</p>
            </div>
            <div className="list-item">
              <div className="list-icon">
                <img src={tick} alt="tick" />
              </div>
              <p>Visual Parsing validation</p>
            </div>
            <div className="list-item">
              <div className="list-icon">
                <img src={tick} alt="tick" />
              </div>
              <p>Instant Reformat CVs Perfectly</p>
            </div>
          </div>

          <div className="button-wrapper">
            <a href="#" className="primary-button">
              Start Free Trial
              <div className="arrow-wrapper">
                <img src={arrow} alt="arrow" />
              </div>
            </a>
            <button className="bttn" >Get Demo</button>
          </div>
        </div>

        {/* Hero Images */}
        <div className="hero-image-wrapper">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};
