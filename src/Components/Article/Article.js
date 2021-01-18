import React from 'react'
import './Article.css';
import PropTypes from "prop-types";


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

Article.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Article;
