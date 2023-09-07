import { useParams, Link } from "react-router-dom";
import { fetchArticleById } from "../api";
import { useState, useEffect } from "react";

//get the id from the url
//fetch the article from the api.js

const ArticleDetails = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchArticleById(id)
      .then((data) => {
        console.log(data);
        setSelectedArticle(data);
      })
      .catch((error) => {
        console.log("Error loading data:", error);
      });
  }, [id]);

  const buttonHandler = (articleId) => {
    const selected = articles.find(
      (article) => article.article_id === articleId
    );
    console.log(selected);
    setSelectedArticle(selected);
  };

  return (
    <div>
      {selectedArticle && (
        <div className="card mt-5">
          <div className="card-body">
            <p className="card-title">
              <strong>Title :</strong>
              {selectedArticle.title}
            </p>
            <p className="card-text">
              <strong>Author :</strong> {selectedArticle.author}
            </p>
            <p className="card-text">
              <strong>ArticleId :</strong> {selectedArticle.article_id}
            </p>
            <p className="card-text">
              <strong>Body :</strong> {selectedArticle.body}
            </p>
            <p className="card-text">
              <strong>Topic :</strong> {selectedArticle.topic}
            </p>
            <p className="card-text">
              <strong>Votes :</strong> {selectedArticle.votes}
            </p>
            <p className="card-text">
              <strong>Comments :</strong> {selectedArticle.comment_count}
            </p>
            <p className="card-text">
              <strong>Created At :</strong> {selectedArticle.created_at}
            </p>
            <center>
              <Link
                to="/"
                className="btn btn-primary"
                // onClick={() => setSelectedArticle(null)}
              >
                Back to Articles
              </Link>
            </center>
          </div>
        </div>
      )}
    </div>
  );
};
export default ArticleDetails;
