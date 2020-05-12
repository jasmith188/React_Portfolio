import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";


const Styles = styled.div`
.navbar {
  background-color: #222;
  padding: 45px 50px;
  border-radius: 0 0 10px 10px;
}

.navbar-brand, .navbar-nav .nav-link {
  color: #bbb;
  font-size: 30px;
  font-weight: bold;
  margin: 0 1rem;

  &:hover {
    color: white;
  }
}
`;

function Header() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Jimmy Smith</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">About Me</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/contact">Contact Me</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  )
} 

export default Header;