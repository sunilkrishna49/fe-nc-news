import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    axios.get("https://nc-news-rppe.onrender.com/api/articles").then((res) => {
      setArticles(res.data.articles);
    });
  }, []);

  const buttonHandler = (articleId) => {
    // console.log("Button clicked for article ID:", articleId);
    const selected = articles.find(
      (article) => article.article_id === articleId
    );
    // console.log("Selected article:", selected);
    setSelectedArticle(selected);
  };

  return (
    <>
      <div className="container my-5">
        <h1>NC-NEWS APP</h1>

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
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() => {
                        buttonHandler(article.article_id);
                      }}
                    >
                      Show Article Details
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {selectedArticle && (
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">{selectedArticle.title}</h5>
              <p className="card-text">Author: {selectedArticle.author}</p>
              <p className="card-text">
                Created At: {selectedArticle.created_at}
              </p>
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => setSelectedArticle(null)}
              >
                Close
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
