import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ArticleContext } from '../contexts/ArticleContext';
import cloudinaryConfig from '../utils/CloudinaryConfig';

import '../css/AddArticle.css';


const AddArticle = () => {
  const { categories, addArticle } = useContext(ArticleContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryConfig.upload_preset);

    setUploading(true);

    axios.post(`https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloud_name}/image/upload`, formData)
      .then(response => {
        setImage(response.data.secure_url);
        setUploading(false);
      })
      .catch(error => {
        console.error('There was an error uploading the image!', error);
        setUploading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { title, description, image, category };
    addArticle(newArticle);
    navigate('/');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <h1 className="text-center mb-4">Ajouter un nouvel article</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                  <Form.Label>Titre</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le titre" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Entrer la description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" onChange={handleImageUpload} />
                  {uploading && <Spinner animation="border" />}
                  {image && <img src={image} alt="Uploaded" style={{ width: '100%', marginTop: '10px' }} />}
                </Form.Group>

                <Form.Group controlId="formCategory">
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Sélectionner une catégorie</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Ajouter
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddArticle;