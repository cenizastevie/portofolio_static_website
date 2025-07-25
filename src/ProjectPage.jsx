import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function ProjectPage({ image, title, description, repo }) {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src={image}
            alt={title}
            style={{ width: '100%', borderRadius: 16, boxShadow: '0 4px 24px #b6d4fe55', objectFit: 'cover', maxHeight: 400 }}
          />
        </Col>
        <Col md={6}>
          <h2 style={{ color: '#007bff', fontWeight: 700, marginBottom: 24 }}>{title}</h2>
          <p style={{ fontSize: '1.2rem', color: '#495057', marginBottom: 32 }}>{description}</p>
          <Button
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'linear-gradient(90deg, #007bff 60%, #6ea8fe 100%)', border: 'none', fontWeight: 600, fontSize: '1.1rem', borderRadius: 8, padding: '12px 32px', marginRight: 16 }}
          >
            View Repository
          </Button>
          <Button
            variant="outline-primary"
            style={{ fontWeight: 600, fontSize: '1.1rem', borderRadius: 8, padding: '12px 32px' }}
            onClick={() => window.location.href = '/'}
          >
            Return to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectPage;
