import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Hero/Bio Section */}
      <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container>
          <Row className="align-items-center justify-content-center flex-column flex-lg-row">
            <Col lg={4} className="d-flex flex-column align-items-center justify-content-center mb-4 mb-lg-0">
              <h1
                className="hero-hi"
                style={{
                  fontSize: '13vw',
                  fontWeight: 500,
                  color: '#007bff',
                  lineHeight: 1,
                  margin: 0,
                  textShadow: '2px 4px 16px #b6d4fe',
                }}
              >
                Hi!
              </h1>
            </Col>
            <Col lg={8} className="d-flex flex-column align-items-center align-items-lg-start">
              <div style={{ width: '100%' }}>
                <p style={{ color: '#6ea8fe', fontSize: '1.5rem', fontWeight: 600, marginBottom: 0, marginTop: 40 }}>
                  {/* Empty for spacing, covered by HI! */}
                  My name is Steven Joseph Ceniza, Welcome to my portfolio! I am a software engineer for 8 years. I'm really interested in landing a role that's related with AWS AI/ML, LLM and Data Pipelines.
                </p>
              </div>
              <div className="d-flex gap-3 mt-2">
                <a
                  href="mailto:steven.ceniza@email.com"
                  className="social-btn d-flex align-items-center justify-content-center"
                  style={{
                    background: 'linear-gradient(90deg, #007bff 60%, #6ea8fe 100%)',
                    color: 'white',
                    borderRadius: 12,
                    padding: '12px 28px',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    boxShadow: '0 2px 12px #b6d4fe77',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    transition: 'transform 0.15s',
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.07)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  aria-label="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="https://linkedin.com/in/steven-ceniza"
                  className="social-btn d-flex align-items-center justify-content-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(90deg, #007bff 60%, #6ea8fe 100%)',
                    color: 'white',
                    borderRadius: 12,
                    padding: '12px 28px',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    boxShadow: '0 2px 12px #b6d4fe77',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    transition: 'transform 0.15s',
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.07)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/steven-ceniza"
                  className="social-btn d-flex align-items-center justify-content-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(90deg, #007bff 60%, #6ea8fe 100%)',
                    color: 'white',
                    borderRadius: 12,
                    padding: '12px 28px',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    boxShadow: '0 2px 12px #b6d4fe77',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    transition: 'transform 0.15s',
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.07)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </Col>
          </Row>
           <Row>
          <Col>
            <h2
              className="work-title text-left"
              style={{ color: '#007bff', fontWeight: 700, marginBottom: 40, marginTop: 60, fontSize: 30  }}
            >
              Here's some of my work:
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="position-relative" style={{ maxWidth: 900, margin: '0 auto' }}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/900/400?random=1"
                    alt="Project 1"
                    style={{ borderRadius: 12, objectFit: 'cover', height: 400 }}
                  />
                  <a
                    href="#"
                    className="view-repo-btn"
                    style={{
                      position: 'absolute',
                      bottom: 30,
                      right: 30,
                      background: '#007bff',
                      color: 'white',
                      borderRadius: 6,
                      padding: '8px 18px',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '1rem',
                      boxShadow: '0 2px 8px #b6d4fe',
                    }}
                  >
                    View Repository
                  </a>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/900/400?random=2"
                    alt="Project 2"
                    style={{ borderRadius: 12, objectFit: 'cover', height: 400 }}
                  />
                  <a
                    href="#"
                    className="view-repo-btn"
                    style={{
                      position: 'absolute',
                      bottom: 30,
                      right: 30,
                      background: '#007bff',
                      color: 'white',
                      borderRadius: 6,
                      padding: '8px 18px',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '1rem',
                      boxShadow: '0 2px 8px #b6d4fe',
                    }}
                  >
                    View Repository
                  </a>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/900/400?random=3"
                    alt="Project 3"
                    style={{ borderRadius: 12, objectFit: 'cover', height: 400 }}
                  />
                  <a
                    href="#"
                    className="view-repo-btn"
                    style={{
                      position: 'absolute',
                      bottom: 30,
                      right: 30,
                      background: '#007bff',
                      color: 'white',
                      borderRadius: 6,
                      padding: '8px 18px',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '1rem',
                      boxShadow: '0 2px 8px #b6d4fe',
                    }}
                  >
                    View Repository
                  </a>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
        </Container>
      </div>

      {/* Work Section */}
      <Container className="work-section mb-5">
        
      </Container>

      {/* Footer */}
      <footer
        className="footer"
        style={{ background: '#343a40', color: 'white', padding: '40px 0', marginTop: 80 }}
      >
        <Container>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <h5 style={{ fontWeight: 700 }}>Steven Joseph Ceniza</h5>
              <p className="mb-2">Software Engineer</p>
              <p  style={{ color: '#fff' }}>Certified AWS Solutions Architect Associate</p>
            </Col>
            <Col md={6} className="d-flex flex-column align-items-md-end align-items-start">
              <h6>Connect with me</h6>
              <div className="d-flex gap-3">
                <a
                  href="mailto:steven.ceniza@email.com"
                  className="text-light"
                  style={{ fontSize: '1.5rem' }}
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="https://linkedin.com/in/steven-ceniza"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '1.5rem' }}
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/steven-ceniza"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '1.5rem' }}
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </Col>
          </Row>
          <hr className="my-4" style={{ borderColor: '#495057' }} />
          <Row>
            <Col className="text-center">
              <p className="mb-0">© 2025 Steven Joseph Ceniza. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
