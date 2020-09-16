import React from 'react';
import { Link } from 'react-scroll';
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar
        style={{ backgroundColor: 'black' }}
        variant="dark"
        expand="sm"
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
              href='home'
              className="nav-name ml-auto"
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
              href='about'
              className="nav-about ml-auto"
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
              href='projects'
              className="nav-projects ml-auto"
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
              href='contact'
              className="nav-contact ml-auto"
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
