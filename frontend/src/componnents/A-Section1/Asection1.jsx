import React from 'react'
import about_cv from '../Assets/about-cv.jpg'

export const Asection1 = () => {
  // Inline styles as JavaScript objects
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  };

  const aboutFeatureFlexStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    textAlign: 'left',
    flexDirection: 'row',  // Default to row for large screens
  };

  const aboutFeatureStyle = {
    flex: 2,
    paddingRight: '20px',
  };

  const h2Style = {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '20px',
    maxWidth: '800px',
    textAlign: 'left',
  };

  const pStyle = {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    maxWidth: '800px',
  };

  const aboutFeatureImgStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  };

  const imgStyle = {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '10px',
  };

  // Media queries handled using conditional rendering
  const mediaQuery900 = window.matchMedia('(max-width: 900px)').matches;
  const mediaQuery600 = window.matchMedia('(max-width: 600px)').matches;
  const mediaQuery400 = window.matchMedia('(max-width: 400px)').matches;

  if (mediaQuery900) {
    aboutFeatureFlexStyle.flexDirection = 'column';  // Stack vertically on smaller screens
    aboutFeatureFlexStyle.alignItems = 'center';
    aboutFeatureFlexStyle.textAlign = 'center';
    aboutFeatureStyle.paddingRight = '0';
    aboutFeatureStyle.marginBottom = '20px';
    h2Style.fontSize = '1.8rem';
    pStyle.fontSize = '1rem';
    imgStyle.maxWidth = '400px';
  }

  if (mediaQuery600) {
    h2Style.fontSize = '1.6rem';
    pStyle.fontSize = '0.95rem';
    imgStyle.maxWidth = '350px';
  }

  if (mediaQuery400) {
    h2Style.fontSize = '1.4rem';
    pStyle.fontSize = '0.85rem';
    imgStyle.maxWidth = '300px';
  }

  return (
    <div style={containerStyle}>
      <div style={aboutFeatureFlexStyle}>
        <div style={aboutFeatureStyle}>
          <h2 style={h2Style}>
            We focus exclusively on the CV.
          </h2>
          <p style={pStyle}>
            At CV Reformatter, we provide our creative wizardry, turning the burden 
            of CV parsing and reformatting into a magical cakewalk. Now, you have the
            freedom to focus on the real game-changing tasks, and let data-driven decisions 
            flow like a river!
            <br />
            <br />
            Our mission: To provide you with smart solutions that eliminate time-consuming tasks
            and allow you to focus on the most important recruiting challenges with ease and 
            efficiency.
          </p>
        </div>
        <div style={aboutFeatureImgStyle}>
          <img src={about_cv} alt="About CV" style={imgStyle} />
        </div>
      </div>
    </div>
  )
}
