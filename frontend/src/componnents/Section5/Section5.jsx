import React from 'react'
import './Section5.css'
import plus from '../Assets/Plus sign.svg'
import equal from '../Assets/Equals sign.svg'
import arrow from '../Assets/Arrow.svg'
import feature_image from '../Assets/features-image.png'

export const Section5 = () => {
  return (
    <div className='container'>
        <h2>
        CVR is the ultimate Solution to your<br />100s of Piled Up CVs
        </h2>
        <div className="feature-flex">
            <div className="cd7">
                <div className="add-flex">
                    <div className="add-blue">
                        <div className="h3">
                        AI Parsing <br /> Automation
                        </div>
                    </div>
                    <img src={plus} alt="" />
                    <div className="add-blue">
                        <div className="h3">Human <br />Validation</div>
                    </div>
                </div>
                <div className="equal-div">
                    <img src={equal} alt="" />
                </div>
                <div className="add-flex">
                    <div className="add-green">
                        <div className="h3">
                        Perfectly <br />Reformatted <br /> CVs 75% Faster
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <p> Poorly parsed CV data in your ATS leads to inaccurate
                    search results and missed top candidates.
                    <br />
                    <br />
                    CV Reformatter ensures perfectly parsed data,
                    eliminating errors and inefficiencies. 
                    Achieve accurate results and confidently
                    find the best candidates.
                </p>
                <div className="button-wrapper" style={{border: 'none'}}>
                    <button className='primary-button'>
                        <div>Start Free Trial</div>
                        <div className="arrow-wrapper">
                            <img src={arrow} alt="" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div className="feature-image">
            <img src={feature_image} alt="" />
        </div>
    </div>
  )
}
