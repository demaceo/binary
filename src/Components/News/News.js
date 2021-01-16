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
        let content = article.content.rendered.replace(/(<([^>]+)>)/gi, "");
        content = content.replaceAll("&#8217;", "'");
        content = content.replaceAll("&#8230;", "");
        content = content.replaceAll('Read More', "")
        return (
          <Article
            key={article.id}
            id={article.id}
            title={title}
            content={content}
          />
        );
      });
    console.log(breakingNews)
  return (
    <section className="news-container">
      <h2 className="news-title">News</h2>
      {newsArticles}
    </section>
  );
}

export default News;