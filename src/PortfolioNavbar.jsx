import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function PortfolioNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand href="/" style={{ fontWeight: 700, color: '#007bff', fontSize: '1.5rem' }}>
          Steven Ceniza
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ fontWeight: 500 }}>Home</Nav.Link>
            <Nav.Link href="#projects" style={{ fontWeight: 500 }}>Projects</Nav.Link>
            <Nav.Link href="#contact" style={{ fontWeight: 500 }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
