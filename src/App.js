import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavScrollExample from './components/navbar';
import Home from './pages/Accueil';
import AddArticle from './components/AjouterArticle';
import About from './pages/Apropos';
import ViewArticle from './pages/ViewArticle';
import  ArticleProvider from './contexts/ArticleContext';
function App() {
  return (
    <ArticleProvider>
    <Router>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/article/:id" element={<ViewArticle />}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </ArticleProvider >
  );
}

export default App;