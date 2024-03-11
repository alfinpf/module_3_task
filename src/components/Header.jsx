import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './mycss.css';

function Header() {
  return (

    <div>
      <Navbar expand="lg" className="bg-warning-subtle">
        <Container>
          <ul className="mb-0">
            <li className="list-unstyled" >
              <img className="navbar-logo" src='./images/icons/logo.webp' alt='logo'/>
            </li>
          </ul>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">HOME</Nav.Link>
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

export default Header