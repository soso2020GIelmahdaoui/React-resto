// src/pages/Home.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CategoriesList from '../components/CategoriesList';
import ArticleList from '../components/articleList';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <CategoriesList onSelectCategory={handleSelectCategory} />
        </Col>
      </Row>
      <ArticleList selectedCategory={selectedCategory} />
    </Container>
  );
};

export default Home;
