import React from 'react';
import kevin from '../Assets/kevin-p.png';
import Michael from '../Assets/Michael-p.png';

export const Asection2 = () => {
  // Inline styles as JavaScript objects
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  };

  const meetDivStyle = {
    textAlign: 'center',
  };

  const h2Style = {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '20px',
  };

  const teamFlexStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '40px',
  };

  const teamImageStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  };

  const cd6Style = {
    flex: 1,
    padding: '0 20px',
    textAlign: 'left',
  };

  const h3Style = {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '10px',
  };

  const pLargeStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const pRegStyle = {
    fontSize: '1rem',
    lineHeight: 1.6,
  };

  // Media queries handled using conditional rendering
  const mediaQuery900 = window.matchMedia('(max-width: 900px)').matches;

  // Adjust styles for smaller screens
  if (mediaQuery900) {
    teamFlexStyle.flexDirection = 'column'; // Stack vertically on smaller screens
    teamFlexStyle.alignItems = 'center';

    // Reset image and text alignment
    teamImageStyle.justifyContent = 'center'; // Center images on small screens
    cd6Style.textAlign = 'center'; // Center text on small screens
  }

  return (
    <div style={containerStyle}>
      <div style={meetDivStyle}>
        <h2 style={h2Style}>Meet The Team</h2>

        {/* First Team Member */}
        <div style={teamFlexStyle}>
          <div style={teamImageStyle}>
            
            <img src={kevin} alt="Kevin Brown" style={{ maxWidth: '90%', height: 'auto', borderRadius: '8px' }} />
          </div>
          <div style={cd6Style}>
            <h3 style={h3Style}>Kevin Brown</h3>
            <div style={pLargeStyle}>Co-Founder / CEO</div>
            <p style={pRegStyle}>
              Kevin has held executive leadership positions at Amazon AWS, IBM, and 
              Booz Allen Hamilton. Regularly managing programs with $20M annual turnover,
              catalyzing business transformation with inventive strategies.
              <br />
              <br />
              His military background as a Combat Engineering Officer and Army Ranger in the
              U.S. Army, attests to his exceptional leadership and steadfastness in demanding
              environments. He holds degrees from MIT, Missouri S&T, and Embry-Riddle 
              Aeronautical University.
            </p>
          </div>
        </div>

        {/* Second Team Member */}
        <div style={{ ...teamFlexStyle, flexDirection: mediaQuery900 ? 'column-reverse' : 'row' }}>
          <div style={cd6Style}>
            <h3 style={h3Style}>Michael Galkovsky</h3>
            <div style={pLargeStyle}>Co-Founder / CTO</div>
            <p style={pRegStyle}>
              Michael’s led digital transformations at IBM and Booz Allen Hamilton for
              high-profile clients such as NATO, the US Army, and the US Air Force. 
              Recognized as an expert in cognitive systems, enterprise strategy, 
              and complex data integration.
              <br />
              <br />
              Michael has been pivotal in the technical leadership and delivery of 
              projects valued at over 1 billion USD. His educational portfolio includes
              an Executive Certificate in Complex System Management from M.I.T. and a B.S. in 
              Computer Science and Mathematics from Freed-Hardeman University.
            </p>
          </div>
          <div style={teamImageStyle}>
            
            <img src={Michael} alt="Michael Galkovsky" style={{ maxWidth: '90%', height: 'auto', borderRadius: '8px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
