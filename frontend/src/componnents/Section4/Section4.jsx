import React from 'react'
import './Section4.css'
import Man_struggle from '../Assets/Man Struggle.svg'
import gradient from '../Assets/gradient.svg'
import inaccurat from '../Assets/Inaccurate.svg'
import Desied_outcome from '../Assets/Desired outcome.svg'

export const Section4 = () => {
  return (
    <div className='container'>
        <div className="benefit-flex">
            <div className="benefit-wrap">
                <div className="benefit-icon-holder">
                    <img src={Man_struggle} alt="" />
                    <div className="icon-gradient">
                        <img src={gradient} alt="" />
                    </div>
                </div>
                <div className="benefit-text-holder">
                    <h3>AI Assisted Parsing</h3>
                    <p>Leverage advanced AI to streamline CV parsing,
                        reducing manual effort and increasing efficiency.</p>
                </div>
            </div>
            <div className="benefit-wrap">
                <div className="benefit-icon-holder">
                    <img src={inaccurat} alt="" />
                    <div className="icon-gradient">
                        <img src={gradient} alt="" />
                    </div>
                </div>
                <div className="benefit-text-holder">
                    <h3>Precision Visual Validation</h3>
                    <p>Utilize our unique, highly visual validation process to 
                        ensure each CV is accurately validated for precise data 
                        75% faster.</p>
                </div>
            </div>
            <div className="benefit-wrap">
                <div className="benefit-icon-holder">
                    <img src={Desied_outcome} alt="" />
                    <div className="icon-gradient">
                        <img src={gradient} alt="" />
                    </div>
                </div>
                <div className="benefit-text-holder">
                    <h3>Instant Perfect Reformatting</h3>
                    <p>Transform CVs instantly and perfectly, saving time and 
                        ensuring perfect data is available for your Applicant 
                        Tracking System (ATS).</p>
                </div>
            </div>
        </div>
    </div>
  )
}
