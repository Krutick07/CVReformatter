import React from 'react'
import './About.css'
import about_hero from '../Assets/about-hero.png'
import { Section2 } from '../Section2/Section2'
import { Asection1 } from '../A-Section1/Asection1'
import { Asection2 } from '../A-section2/Asection2'
import Section9 from '../Section9/Section9'
import { Section10 } from '../Section10/Section10'

export const About = () => {
  return (
    <>
      <div className='container'>
        <div className="about-hero">
          <h1 className='h1s'>
          About CV Reformatter
          <br />
          and it’s 
          <span className='hero-span'> SuperPower</span>
          </h1>
          <p className="hero-p">
          CV Reformatter's superpower is the exceptional leadership and extensive 
          experience of its founders, driving unparalleled expertise in technology 
          innovation and strategic business transformation.
          </p>
          <div className="about-image">
            <img src={about_hero} alt="" />
          </div>
        </div>
      </div>
      <Section2/>
      <Asection1/>
      <Asection2/>
      <Section9/>
      <Section10/>
    </>
  )
}
