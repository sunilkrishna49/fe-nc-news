import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://nc-news-rppe.onrender.com/api/articles")
    .then(({ data }) => {
      const { articles } = data;
      return articles;
    });
};

export const fetchArticleById = (articleId) => {
  return axios
    .get(`https://nc-news-rppe.onrender.com/api/articles/${articleId}`)
    .then(({ data }) => {
      const { article } = data;
      return article;
    });
};

export const fetchCommentsByArticleId = (articleId) => {
  return axios
    .get(`https://nc-news-rppe.onrender.com/api/articles/${articleId}/comments`)
    .then(({ data }) => {
      const { comments } = data;
      return comments;
    });
};
