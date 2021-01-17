import { findAllByTitle } from '@testing-library/react';
import React from 'react'
import './Article.css';

function Article({id, image, title, content, link}) {
    const handleClick = () => {
        window.open(link);
    }
    return (
      <article className="news-article" id={id} onDoubleClick={handleClick}>
        <img src={image} className="article-img center" />
        <div className="article-container center">
          <h3 className="article-title">{title}</h3>
          <p className="article-info">{content}</p>
        </div>
      </article>
    );
}

export default Article;
