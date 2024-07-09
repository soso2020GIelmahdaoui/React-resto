import React, { useContext } from 'react';
import { ArticleContext } from '../contexts/ArticleContext';
import ArticleCard from './ArticleCard';
import { Row, Col } from 'react-bootstrap';

const ArticleList = () => {
  const { articles } = useContext(ArticleContext);

  
  return (
    <Row>
      {articles.map(article => (
        <Col key={article.id} sm={12} md={6} lg={4}>
          <ArticleCard article={article} />
        </Col>
      ))}
    </Row>
  );
};

export default ArticleList;
