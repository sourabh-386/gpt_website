import React from 'react'
import './Possibility.css'
import Possibility_img from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div>
      <div className='possibility'>
        <div className="possibility_img">
          <img src={Possibility_img} alt="img" />
        </div>
        <div className="possibility_text">
          <p>Request Early Access to Get Started</p>
          <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p style={{color:"red"}}>Request Early Access to Get Started</p>
        </div>
      </div>

    </div>
  )
}

export default Possibility