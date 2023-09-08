import React, { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../api";
import { useParams, Link } from "react-router-dom";
const CommentsByArticleId = (articleId) => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCommentsByArticleId(id)
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.log("Error loading data:", error);
      });
  }, [id]);

  return (
    <>
      <br></br>
      <center>
        <Link to={`/article/${id}`} className="btn btn-primary">
          Back to Article Details Page
        </Link>
      </center>
      <br></br>
      <center>
        <h7>
          Comments List for Article Id : <strong>{id}</strong>
        </h7>
      </center>
      {comments.map((comment, index) => {
        return (
          <div
            className="card"
            key={index}
            style={{ margin: "30px", border: "1px solid" }}
          >
            <div className="card-header">
              <strong>Comment ID : {comment.comment_id}</strong>
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <center>
                  <p>{comment.body}</p>
                </center>
                <center>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">{comment.author}</cite>
                  </footer>
                </center>
              </blockquote>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommentsByArticleId;
