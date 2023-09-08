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

    setSelectedArticle(selected);
  };

  return (
    <div>
      <br></br>
      <center>
        <h5>Article Details</h5>
      </center>
      {selectedArticle && (
        <div
          className="card mt-3"
          style={{ margin: "30px", border: "2px solid" }}
        >
          <div className="card-body">
            <center>
              <p className="card-text">
                <u>
                  ArticleId : <strong>{selectedArticle.article_id}</strong>
                </u>
              </p>
            </center>
            <br></br>
            <p className="card-title">
              <strong>Title :</strong>
              {selectedArticle.title}
            </p>
            <p className="card-text">
              <strong>Author :</strong> {selectedArticle.author}
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
              <strong>Created At :</strong> {selectedArticle.created_at}
            </p>
            <Link to={`/articles/${selectedArticle.article_id}/comments`}>
              <button>View Comments</button>
            </Link>
            <center>
              <Link to="/" className="btn btn-primary">
                Back to All Articles Page
              </Link>
            </center>
          </div>
        </div>
      )}
      <br></br>
    </div>
  );
};
export default ArticleDetails;
