import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../css/CustomNavbar.css'

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#007bff' }}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Navbar.Brand as={Link} to="/" style={{ color: '#fff' }}>Restoran</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" style={{ color: '#fff' }}>Accueil</Nav.Link>
              <Nav.Link as={Link} to="/add-article" style={{ color: '#fff' }}>Ajouter Article</Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: '#fff' }}>À Propos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex search-form">
            <Form.Control 
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="search-input"
            />
            <Button variant="outline-light" className="search-button">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
