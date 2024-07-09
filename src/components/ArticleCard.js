import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/ArticleCard.css' // Assurez-vous de créer ce fichier CSS

const ArticleCard = ({ article }) => {
  return (
    <Card className="article-card">
      <div className="image-container">
        <Card.Img variant="top" src={article.image} className="article-image" />
      </div>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.description.substring(0, 100)}...</Card.Text>
        <Link to={`/article/${article.id}`} className="btn btn-primary" >Lire plus</Link>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
