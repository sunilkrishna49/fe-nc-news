import { useState, useEffect } from "react";
import { fetchArticles } from "../api";

import { Link } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error loading data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      <div className="row text-center">
        {articles.map((article, index) => {
          return (
            <div className="col" key={index} style={{ marginBottom: "20px" }}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={article.article_img_url}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <h6 className="card-text">Topic: {article.topic}</h6>
                  <Link
                    to={`/article/${article.article_id}`}
                    className="btn btn-primary"
                  >
                    Show Article Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ArticlesList;
