// src/contexts/ArticleContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the categories!', error);
      });

    axios.get('http://localhost:8000/articles')
      .then(response => {
        setArticles(response.data.reverse());
      })
      .catch(error => {
        console.error('There was an error fetching the articles!', error);
      });
  }, []);

  const addArticle = (article) => {
    axios.post('http://localhost:8000/articles', article)
      .then(response => {
        setArticles([response.data, ...articles]);
      })
      .catch(error => {
        console.error('There was an error adding the article!', error);
      });
  };

  const value = {
    articles,
    categories,
    selectedCategory,
    setSelectedCategory,
    addArticle
  };

  return (
    <ArticleContext.Provider value={value}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
