import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './mycss.css';

function Header() {
  return (

    <div className='navbar-borderbottom'>
      <Navbar expand="lg" className="bg-warning-subtle">
        <Container>

          <Navbar.Brand href="/">
            <img
              src="./images/icons/logo.webp"
              height="75px"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/product1">HAIR CARE HERBAL OIL</Nav.Link>
              <Nav.Link href="/product2">HAIR CARE PLUS HERBAL OIL</Nav.Link>
              <Nav.Link href="/product3">ANTI-DANDRUFF OIL</Nav.Link>
              <Nav.Link href="/product4">NEELIBHRINGADI KERAM</Nav.Link>
              <Nav.Link href="/product5">NATURAL DAILY OIL</Nav.Link>
              <Nav.Link href="/about">ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;