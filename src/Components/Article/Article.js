import { findAllByTitle } from '@testing-library/react';
import React from 'react'
import './Article.css';

function Article({id, title, content}) {

    return (
      <article className="news-article" id={id}>
        <h3 className="article-title">{title}</h3>
        <img className="article-img"></img>
        <p className="article-info">{content}</p>
      </article>
    );
}

export default Article;
