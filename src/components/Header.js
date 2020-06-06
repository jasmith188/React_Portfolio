import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"


function Header() {
  return (
   <Container>
      <Navbar expand="lg" variant="light">
        <Navbar.Brand href="/React_Portfolio">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/React_Portfolio/about">About Me</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/React_Portfolio/projects">Projects</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/React_Portfolio/contact">Contact Me</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
   
  )
} 

export default Header;