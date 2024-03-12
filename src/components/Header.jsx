import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './mycss.css';
import { Link, useLocation } from 'react-router-dom';


function Header() {

  const location = useLocation();
  const { pathname } = location;

  return (

    <div className='navbar-borderbottom'>
      <Navbar expand="lg" className="bg-warning-subtle">
        <Container>

          <Navbar.Brand as={Link} to="/">
            <img
              src="./images/icons/logo.webp"
              height="75px"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link active={pathname==="/product1"} as={Link} to="/product1">HAIR CARE HERBAL OIL</Nav.Link>
              <Nav.Link active={pathname==="/product2"} as={Link} to="/product2">HAIR CARE PLUS HERBAL OIL</Nav.Link>
              <Nav.Link active={pathname==="/product3"} as={Link} to="/product3">ANTI-DANDRUFF OIL</Nav.Link>
              <Nav.Link active={pathname==="/product4"} as={Link} to="/product4">NEELIBHRINGADI KERAM</Nav.Link>
              <Nav.Link active={pathname==="/product5"} as={Link} to="/product5">NATURAL DAILY OIL</Nav.Link>
              <Nav.Link active={pathname==="/about"} as={Link} to="/about">ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;