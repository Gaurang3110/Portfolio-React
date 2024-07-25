import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_image1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>Gaurang Srivastava</span> A Competitive Programmer</h1>
      <p>I'm Gaurang Srivastava - A FrontEnd Developer , ML Enthusiast , AppDev Beginner</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
