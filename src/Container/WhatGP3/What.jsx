import React from 'react'
import { Feature } from '../../Component'
import './What.css'
const What = () => {
  return (
    <div>
      <div className="what">
        <div className="what_feature_row">
          <Feature title={'What is GPT-3'} para={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'} />
        </div>
        <div className="what_feature_heading">
        <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
        <p>Explore The Library</p>
        </div>
       <div className="what_feature_col">
       <Feature title={'Chatbots'} para={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '} />
        <Feature title={'Knowledgebase'} para={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'} />
        <Feature title={'Education'} para={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'} />
       </div>

      </div>
    </div>
  )
}

export default What