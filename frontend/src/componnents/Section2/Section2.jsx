import React from 'react'
import './Section2.css'
import SR_Group from '../Assets/The SR Group.png'
import Rovert_Half from '../Assets/Robert Half.png'
import Michael_Page from '../Assets/Michael Page.png'
import TASC from '../Assets/TASC.png'

export const Section2 = () => {
  return (
    <div className='section2'>
       <div className="container">
        <div className="logo-wrap">
            <h2 className="text">
                We are Trusted by innovative compaines worldwide.
            </h2>
            <div className="logo-flex">
                <div className="logo-holder">
                    <img src={SR_Group} alt="" />
                </div>
                <div className="logo-holder">
                    <img src={Rovert_Half} alt="" />
                </div>
                <div className="logo-holder">
                    <img src={Michael_Page} alt="" />
                </div>
                <div className="logo-holder">
                    <img src={TASC} alt="" />
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}
