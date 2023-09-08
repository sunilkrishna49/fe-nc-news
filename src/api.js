import axios from "axios";

const urlBase = "http://localhost:9090/api/";

export const fetchArticles = () => {
  return axios.get(`${urlBase}articles`).then(({ data }) => {
    const { articles } = data;
    return articles;
  });
};

export const fetchArticleById = (articleId) => {
  return axios.get(`${urlBase}articles/${articleId}`).then(({ data }) => {
    const { article } = data;
    return article;
  });
};

export const fetchCommentsByArticleId = (articleId) => {
  return axios
    .get(`${urlBase}articles/${articleId}/comments`)
    .then(({ data }) => {
      const { comments } = data;
      return comments;
    });
};
