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
        title = title.replace( /(<([^>]+)>)/ig, '');
        title = title.replaceAll("F&#038;F9", "");
        let content = article.content.rendered.replace(/(<([^>]+)>)/gi, "");
        content = content.replaceAll("&#8217;", "'");
        content = content.replaceAll("&#8230;", "");
        content = content.replaceAll("F&#038;F9", "");
        content = content.replaceAll("&#8220;", "");
        content = content.replaceAll("&#8221;", "");
        content = content.replace('Read More', "");

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