import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function ProjectPage({ image, diagram, title, description, repo }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const openModal = (imgSrc) => {
    setModalImg(imgSrc);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <div style={{ position: 'relative', marginBottom: 24 }}>
            <img
              src={image}
              alt={title}
              style={{ width: '100%', borderRadius: 16, boxShadow: '0 4px 24px #b6d4fe55', objectFit: 'cover', maxHeight: 400 }}
            />
            <button
              onClick={() => openModal(image)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'rgba(0,123,255,0.85)',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 2px 8px #b6d4fe',
                cursor: 'pointer',
                zIndex: 2,
              }}
              aria-label="Magnify image"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2" />
                <line x1="16" y1="16" x2="21" y2="21" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <div style={{ position: 'relative' }}>
            <img
              src={diagram}
              alt={title + ' Diagram'}
              style={{ width: '100%', borderRadius: 16, boxShadow: '0 4px 24px #b6d4fe33', objectFit: 'contain', maxHeight: 400, background: '#fff' }}
            />
            <button
              onClick={() => openModal(diagram)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'rgba(0,123,255,0.85)',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 2px 8px #b6d4fe',
                cursor: 'pointer',
                zIndex: 2,
              }}
              aria-label="Magnify diagram"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2" />
                <line x1="16" y1="16" x2="21" y2="21" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </div>
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
      {/* Modal for full image view */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.8)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={closeModal}
        >
          <img
            src={modalImg}
            alt="Full view"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: 16,
              boxShadow: '0 4px 24px #b6d4fe99',
              background: '#fff',
            }}
          />
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: 32,
              right: 32,
              background: 'rgba(0,123,255,0.85)',
              border: 'none',
              borderRadius: '50%',
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: '0 2px 8px #b6d4fe',
              cursor: 'pointer',
              zIndex: 10000,
              fontSize: 28,
            }}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
      )}
    </Container>
  );
}

export default ProjectPage;
