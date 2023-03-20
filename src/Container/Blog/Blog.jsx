import React from 'react'
import { Feature } from '../../Component'
import './Blog.css'
const Blog = () => {
  return (
    <div>
      <div className="blog">
        <div className="blog_main gradient__text">
          <h2>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen</h2>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="blog_features">
          <Feature title={'Improving end distrusts instantly '} para={'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'}  />
          <Feature  title={'Become the tended active'} para={'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'} />
          <Feature  title={'Message or am nothing'} para={'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'} />
          <Feature  title={'Really boy law county'} para={'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'} />

          
        </div>
      </div>
    </div>
  )
}

export default Blog