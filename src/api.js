import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://nc-news-rppe.onrender.com/api/articles")
    .then(({ data }) => {
      const { articles } = data;
      console.log(articles);
    });
};
