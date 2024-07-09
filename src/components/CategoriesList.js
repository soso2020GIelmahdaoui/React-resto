import React, { useContext } from 'react';
import { Nav, Container } from 'react-bootstrap';
import { ArticleContext } from '../contexts/ArticleContext';
import '../css/CategoriesList.css';

const CategoriesList = () => {
  const { categories, setSelectedCategory, selectedCategory } = useContext(ArticleContext);

  return (
    <Container className="categories-container">
      <h1 className="categories-title">Catégories</h1>
      <Nav className="justify-content-center categories-nav">
        {categories.map(category => (
          <Nav.Item key={category.id}>
            <Nav.Link 
              href="#" 
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? 'active' : ''}
            >
              {category.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  );
};

export default CategoriesList;
