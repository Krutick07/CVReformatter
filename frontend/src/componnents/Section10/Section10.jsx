import React from 'react'
import './Section10.css'
import arrow from '../Assets/Arrow.svg'
import cta from '../Assets/cta-image-2.jpg'

export const Section10 = () => {
  return (
    <div className="container">
        <div className="block">
            <h2 className="h2s-cta">
            Empowering Recruiters to make Accurate
            <br />
            & Faster Decision
            </h2>
            <div className="button-wrapper">
                <button className="primary-button btn">
                    <div>Start Free Trial</div>
                    <div className="arrow-wrapper">
                        <img src={arrow} alt="" />
                    </div>
                </button>
            </div>
            <div className="image-holder">
                <img src={cta} alt="" sizes="(max-width: 479px) 76vw, (max-width: 767px) 65vw, (max-width: 991px) 67vw, 59vw" className="image" />
            </div>
        </div>
    </div>
  )
}
