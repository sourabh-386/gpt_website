import React from 'react'
import './Footer.css'

import footer_img from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_text">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <p>Request Early Access</p>
      </div>

      <div className="footer_link">
        <div className="footer_link_img">
          <img src={footer_img} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer_link_links">
          <div className='footer_link_p1'>
            <h3>Links</h3>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className='footer_link_p1'>
            <h3>Company</h3>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className='footer_link_p1'>
            <h3>Get in touch</h3>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      @Copyright 2023
      <br />
      <br />
    </div>
  )
}

export default Footer