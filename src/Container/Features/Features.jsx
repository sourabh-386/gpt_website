import React from 'react'
import { Articles } from '../../Component'
import './Features.css'

// import images 
import article_image1 from '../../assets/blog01.png'
import article_image2 from '../../assets/blog02.png'
import article_image3 from '../../assets/blog03.png'
import article_image4 from '../../assets/blog04.png'
import article_image5 from '../../assets/blog05.png'



// article_data_list 
let article_data_list = [
  {
    article_image: article_image1,
    article_para: 'Sep 26, 2021',
    article_heading: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    article_read: 'Read Full Article'
  },
  {
    article_image: article_image2,
    article_para: 'Sep 26, 2021',
    article_heading: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    article_read: 'Read Full Article'
  },
  {
    article_image: article_image3,
    article_para: 'Sep 26, 2021',
    article_heading: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    article_read: 'Read Full Article'
  },
  {
    article_image: article_image4,
    article_para: 'Sep 26, 2021',
    article_heading: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    article_read: 'Read Full Article'
  },
  {
    article_image: article_image5,
    article_para: 'Sep 26, 2021',
    article_heading: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    article_read: 'Read Full Article'
  }


]


const Features = () => {

  console.log(article_data_list[0])



  return (
    <div className='featuress'>
      <div className="featuress_head">
        <h1 className='gradient__text featuress_head_text'>
          A lot is happening,
          <br />
          We are blogging about it.
        </h1>
      </div>
      <div className="featuress_article">
        <div className="featuress_articles_p1">
          <Articles article_data={article_data_list[0]} />
        </div>
        <Articles article_data={article_data_list[1]} />
        <Articles article_data={article_data_list[2]} />
        <Articles article_data={article_data_list[3]} />
        <Articles article_data={article_data_list[4]} />
      </div>

    </div>
  )
}

export default Features