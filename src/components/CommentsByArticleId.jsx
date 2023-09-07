import React from "react";
import { fetchCommentsByArticleId } from "../api";
import { useParams, Link } from "react-router-dom";
const  CommentsByArticleId = () {

  return (
    <div>
      <h5>Comments:</h5>

      <center>
        <Link to="/" className="btn btn-primary">
          Back to Articles
        </Link>
      </center>
    </div>
  );
}

export default CommentsByArticleId;
