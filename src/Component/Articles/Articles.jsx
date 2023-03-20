import React from 'react'
import './Article.css'

const Articles = ({article_data}) => {
  console.log(article_data)
  return (
      <div className='article'>
        <div className="article_data">
          <img src={article_data.article_image} alt="" />
          <p>{article_data.article_para}</p>
          <h3>{article_data.article_heading}</h3>
        </div>

        <div className="article_read">
          <p>{article_data.article_read}</p>
        </div>
      </div>
      )
}

      export default Articles