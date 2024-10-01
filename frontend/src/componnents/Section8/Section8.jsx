import React from 'react'
import './Section8.css'
import price_tick from '../Assets/price-tick.svg'
import arrow from '../Assets/Arrow.svg'

export const Section8 = () => {
  return (
    <div className='container'>
        <h2 className="h2s">
        Start Saving Time Today!
        <br />
        Try our free package first.
        <br />
        Then purchase only what you need.
        </h2>
        <div className="pricing-flex">
            <div className="pricing-div">
                <div className="pricing-top">
                    <div className="pricing-label">
                        <div className="pricing-label-text">
                        10 CV Reformat
                        <br />
                        Package
                        </div>
                    </div>
                    <div className="pricing-top">€45.00</div>
                    <div className="pricing-24">2.5 Hours Saved</div>   
                    <div className="price-list-wrap">
                        <div className="price-list-flex">
                            <div className="price-list-icon">
                                <img src={price_tick} alt="" />
                                <p className='p-reg'>€4.50 Per CV Reformat</p>
                            </div>
                        </div>
                        <div className="price-list-flex">
                            <div className="price-list-icon">
                                <img src={price_tick} alt="" />
                                <p className='p-reg'>15 Minutes Saved Per CV Validation</p>
                            </div>
                        </div>
                        <div className="price-list-flex">
                            <div className="price-list-icon">
                                <img src={price_tick} alt="" />
                                <p className='p-reg'>5 Free CV Templates included</p>
                            </div>
                        </div>
                        <div className="price-list-flex">
                            <div className="price-list-icon">
                                <img src={price_tick} alt="" />
                                <p className='p-reg'>One Time Purchase</p>
                            </div>
                        </div>
                    </div>
                    <div className="price-bottom">
                        <div className="button-wrapper">
                            <button className="secondary-button null">
                                <div>Start Free Trial</div>
                                <div className="arrow-wrapper">
                                    <img src={arrow} alt="" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing-div highlight">
                <div className="pricing-top">
                    <div className="pricing-label">
                        <div className="pricing-label-text">
                        50 CV Reformat
                        <br />
                        Package
                        </div>
                    </div>
                    <div className="pricing-top">€225.00</div>
                    <div className="pricing-24">12.5 Hours Saved</div>   
                    <div className="price-list-wrap">
                        <div className="price-list-flex">
                            <div className="price-list-icon">
                                <img src={price_tick} alt="" />
                                <p className='p-reg'>€4.50 Per CV Reformat</p>
                            </div>
                        </div>
                        <div className="price-list-flex">
                            <div className="price-list-icon">
                                <img src={price_tick} alt="" />
                                <p className='p-reg'>15 Minutes Saved Per CV Validation</p>
                            </div>
                        </div>
                        <div className="price-list-flex">
                            <div className="price-list-icon">
                                <img src={price_tick} alt="" />
                                <p className='p-reg'>5 Free CV Templates included</p>
                            </div>
                        </div>
                        <div className="price-list-flex">
                            <div className="price-list-icon">
                                <img src={price_tick} alt="" />
                                <p className='p-reg'>One Time Purchase</p>
                            </div>
                        </div>
                    </div>
                    <div className="price-bottom">
                        <div className="button-wrapper">
                            <button className="secondary-button">
                                <div>Start Free Trial</div>
                                <div className="arrow-wrapper">
                                    <img src={arrow} alt="" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
