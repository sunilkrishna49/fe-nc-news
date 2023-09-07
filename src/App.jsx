import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
