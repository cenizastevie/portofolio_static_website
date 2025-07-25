import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import PortfolioNavbar from './PortfolioNavbar';
import ProjectPage from './ProjectPage';

const projects = [
  {
    image: '/projects/aws_chat_buddy.png',
    title: 'AWS Chat Buddy',
    description: 'A full-stack language learning chatbot powered by AWS Bedrock (Claude/Titan) for LLM, a Zappa Flask backend for API/session/LLM logic, and a modern React frontend hosted on S3 + CloudFront. Scenario-based templates enable interactive English practice with grammar correction and progress tracking.',
    repo: 'https://github.com/cenizastevie/aws_language_chat_buddy',
  },
  {
    image: '/projects/aws_semantic_search.png',
    title: 'AWS Semantic Search',
    description: 'This project is a serverless AWS application for real-time semantic search. It uses a Flask backend deployed with Zappa, enabling scalable serverless execution. The backend leverages AWS Bedrock for generating text embeddings and stores/searches data in OpenSearch. Real-time communication between the backend and a React frontend is handled via WebSockets, allowing users to perform fast, semantic searches and receive instant results. The React frontend provides an interactive user interface for search queries and displaying results.',
    repo: 'https://github.com/cenizastevie/aws_semantic_search_app',
  },
  {
    image: '/projects/aws_semantic_search_ingestion.png',
    title: 'AWS Semantic Search Ingestion',
    description: 'This AWS Semantic Search Ingestion project processes Common Crawl WARC files to extract and analyze news content for semantic search capabilities. When triggered, a Lambda function reads manifest files containing WARC file listings and launches Fargate tasks to download and extract article content from news website domains within the WARC files. The extracted articles are streamed through Kinesis Data Firehose to an S3 bucket, which then triggers SageMaker batch transform jobs that summarize the content, perform sentiment analysis, and generate vector embeddings suitable for OpenSearch indexing. The system uses containerized processing with ECR, automated CI/CD deployment through CodePipeline, and scales automatically to handle large volumes of Common Crawl data for building comprehensive news content search indexes.',
    repo: 'https://github.com/cenizastevie/aws_semantic_search_ingestion',
  },
];

function App() {
  const [showProject, setShowProject] = useState(null);
  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <PortfolioNavbar />
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
                  My name is Steven Joseph Ceniza. Welcome to my portfolio! I am a software engineer with 8 years of experience. I’m particularly interested in roles related to AWS, AI/ML, LLMs, and data pipelines.
                </p>
              </div>
              <div className="d-flex gap-3 mt-2">
                <a
                  href="mailto:cenizastevie@gmail.com"
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
                  title="cenizastevie@gmail.com"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/steven-joseph-ceniza-377583207/"
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
                  href="https://github.com/cenizastevie?tab=repositories"
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
            <div className="position-relative" style={{ maxWidth: 1400, margin: '0 auto' }}>
              {showProject === null ? (
                <>
                  <Carousel>
                    {projects.map((project, idx) => (
                      <Carousel.Item key={project.title}>
                        <img
                          className="d-block"
                          style={{
                            width: '100%',
                            maxWidth: '1200px',
                            margin: '0 auto',
                            borderRadius: 12,
                            objectFit: 'cover',
                            height: 400,
                            display: 'block',
                          }}
                          src={project.image}
                          alt={project.title}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            top: 30,
                            left: 30,
                            background: 'rgba(0,123,255,0.85)',
                            color: 'white',
                            padding: '10px 24px',
                            borderRadius: 8,
                            fontWeight: 700,
                            fontSize: '1.3rem',
                            boxShadow: '0 2px 8px #b6d4fe',
                            zIndex: 2,
                            maxWidth: '70%',
                          }}
                        >
                          {project.title}
                        </div>
                        <button
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
                            border: 'none',
                            cursor: 'pointer',
                          }}
                          onClick={() => setShowProject(idx)}
                        >
                          Read More
                        </button>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <style>{`
                    .carousel-control-next, .carousel-control-prev {
                      filter: none !important;
                    }
                    .carousel-control-next-icon, .carousel-control-prev-icon {
                      background-color: #007bff !important;
                      border-radius: 0;
                      width: 30px;
                      height: 30px;
                    }
                  `}</style>
                </>
              ) : (
                <ProjectPage
                  image={projects[showProject].image}
                  title={projects[showProject].title}
                  description={projects[showProject].description}
                  repo={projects[showProject].repo}
                />
              )}
            </div>
          </Col>
        </Row>
        </Container>
      </div>

      {/* Work Section */}
      <Container className="work-section mb-5">
        {/* You can add more content here if needed */}
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
