import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHistory, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../css/about.css';

const About = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">À propos de Restoran</h1>
      <Row className="align-items-center">
        <Col md={4}>
          <Card className="text-center mb-4">
            <Card.Body>
              <FontAwesomeIcon icon={faUtensils} size="3x" className="mb-3" />
              <Card.Title>Notre Mission</Card.Title>
              <Card.Text>
                Partager des recettes délicieuses et des idées culinaires pour inspirer les amateurs de cuisine.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center mb-4">
            <Card.Body>
              <FontAwesomeIcon icon={faHistory} size="3x" className="mb-3" />
              <Card.Title>Notre Histoire</Card.Title>
              <Card.Text>
                Restoran a été fondé en 2024 avec la vision de créer une communauté culinaire passionnée et engagée.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center mb-4">
            <Card.Body>
              <FontAwesomeIcon icon={faUsers} size="3x" className="mb-3" />
              <Card.Title>Notre Équipe</Card.Title>
              <Card.Text>
                Une équipe de chefs professionnels et de passionnés de cuisine dédiés à vous offrir le meilleur contenu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
