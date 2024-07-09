import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import '../css/ViewArticle.css'; // Ensure you create this CSS file

const ViewArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/articles/${id}`)
      .then(response => {
        setArticle(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the article!', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Container className="mt-5">
      <Row className="article-container">
        <Col md={6}>
          <img src={article.image} alt={article.title} className="article-image" />
        </Col>
        <Col md={6} className="article-content">
          <h1 className="article-title">{article.title}</h1>
          <p className="article-description">{article.description}</p>
          <p className='article-price'>{article.price}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewArticle;
