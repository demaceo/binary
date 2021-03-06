import "./News.css";
import Article from '../Article/Article';
import PropTypes from "prop-types";

const News = ({breakingNews}) => {
    const newsArticles = breakingNews.map((article) => {
      let title = article.title.rendered.replace("&#8217;", "'");
      title = title.replace(
        /F&#038;F9|&#8220;|&#8221;|&#8216;|&#8230;/g,
        ""
      );
      title = title.replace(/(<([^>]+)>)/gi, "");
      title = title.replace("&#8212;", "-");
      title = title.replace("&#8211;", "- ");

      let content = article.content.rendered.replace(/(<([^>]+)>)/gi, "");
      content = content.replace(/&#8217;|&#8221;/g, "' ");
      content = content.replace(
        /F&#038;F9|&#8216;|&#8220;|&#8230;|Read More||Keep studying|Keep reading/g,
        ""
      );
      content = content.replace("&#8212;", "-");
      content = content.replace("&#8211;", "- ");
      content = content.slice(0, 1000);

      if (article.jetpack_featured_media_url !== "") {
        return (
          <Article
            key={article.id}
            id={article.id}
            image={article.jetpack_featured_media_url}
            title={title}
            content={content}
            link={article.link}
          />
        );
      }
    });

  return (
      <>
        <h2 className="news-title">News</h2>
        <section className="news-container">
            {newsArticles}
        </section>
    </>
  );
}

News.propTypes = {
  breakingNews: PropTypes.array.isRequired,
};

export default News;