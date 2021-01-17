import "./News.css";
import { useState, useEffect } from "react";
import Article from '../Article/Article';
import { getBreakingNews } from "../../utilities/apiCalls";

const News = () => {
    const [breakingNews, setBreakingNews] = useState([]);

    useEffect( async() =>  {
        await getBreakingNews().then((data) => setBreakingNews(data));
      }, []);

    const newsArticles = breakingNews.map((article) => {
      let title = article.title.rendered.replaceAll("&#8217;", "'");
      title = title.replaceAll(/F&#038;F9|&#8220;|&#8221;|&#8230;/g, "");
      title = title.replace(/(<([^>]+)>)/gi, "");
      title = title.replaceAll("&#8212;", "-");
      title = title.replaceAll("&#8211;", "- ");

      let content = article.content.rendered.replace(/(<([^>]+)>)/gi, "");
      content = content.replaceAll("&#8217;", "'");
      content = content.replaceAll(
        /F&#038;F9|&#8220;|&#8221;|&#8230;|Read More/g,
        ""
      );
      content = content.replaceAll("&#8212;", "-");
      content = content.replaceAll("&#8211;", "- ");
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

export default News;