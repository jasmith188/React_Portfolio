import React from 'react';
import { Link } from 'react-scroll';
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar
        style={{ backgroundColor: 'black' }}
        variant="dark"
        expand="lg"
        sticky="top"
        collapseOnSelect
      >
        <Navbar.Brand>James Smith</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="home"
              className="nav-name"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="about"
              className="nav-about"
            >
              About
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="projects"
              className="nav-projects"
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="contact"
              className="nav-contact"
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
