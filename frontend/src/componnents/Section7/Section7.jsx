import React from 'react'
import './Section7.css'
import quote from '../Assets/quote.svg'
import star from '../Assets/Stars.svg'
import deco from '../Assets/deco-2.svg'

export const Section7 = () => {
  return (
    <div className='container'>
        <h2 className="h2s">
        Don't take our word for it,
        <br />
        see what our customers say
        </h2>
        
        <div className="testimonial-flex">
            <div className="testimonial">
                <div className="testimonial-up">
                    <div className="testimonial-icon">
                        <img src={quote} alt="" />
                    </div>
                    <p>
                    “My team used to spend hours getting CVs in the right format 
                    just before proposal was due. Today this is all automated.”
                    </p>
                </div>
                <div className="testimonial-down">
                    <div className="star-holder">
                        <img src={star} alt="" />
                    </div>
                    <p className='bold'>James Hudson</p>
                    <p className="sp">Proposal Manager at Premiere Consulting Firm</p>
                </div>
            </div>
            <div className="testimonial">
                <div className="testimonial-up">
                    <div className="testimonial-icon">
                        <img src={quote} alt="" />
                    </div>
                    <p>
                    “Our ATS was struggling to extract meaningful data from the CVs coming 
                    through our pipeline. With Uptomic CV service we improved the quality and
                    completness of our candidate data. We can now search for skills and match
                    against new jobs much more reliably.”
                    </p>
                </div>
                <div className="testimonial-down">
                    <div className="star-holder">
                        <img src={star} alt="" />
                    </div>
                    <p className='bold'>Elena Summers</p>
                    <p className="sp">CEO & CO-Founder</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}