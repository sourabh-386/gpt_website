import React from 'react'
import './Header.css'

import header_image from '../../assets/ai.png'

import review_img from '../../assets/people.png'
const Header = () => {
  return (
    <div className="header_main">
      <div className='header'>
        <div className='header_data'>
          <h1 className='gradient__text'>Let’s Build Something
            amazing with GPT-3
            OpenAI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
            Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

          <div className="header_data_input">
            <input type="text" placeholder='Enter Your Email'/>
            <button>Get Started</button>
          </div>
          <div className="header_data_review">
            <img src={review_img} alt="reviews" />
            <p>1,600 people requested access a visit in last 24 hours</p>

          </div>

        </div>
        <div className='header_img'>
          <img src={header_image} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Header