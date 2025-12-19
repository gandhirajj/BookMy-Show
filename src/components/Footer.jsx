import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="app-footer">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>BookMyShow</h5>
            <p>Book your movie tickets easily and quickly.</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted">Home</a></li>
              <li><a href="/about" className="text-muted">About Us</a></li>
              <li><a href="/contact" className="text-muted">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <p className="text-muted">
              Facebook | Twitter | Instagram
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center text-muted">
            <p>&copy; 2024 BookMyShow. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
