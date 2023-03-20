import React from 'react'
import './Feature.css'

const Feature = ({ title, para }) => {
  return (
    <div className='feature'>
      <div className="feature_heading">
        <div className="feature_bar  "></div>
        <h3 className='gradient__text'>{title}</h3>
      </div>
      <p>{para}</p>
    </div>
  )
}

export default Feature