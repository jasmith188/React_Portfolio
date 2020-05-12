import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
// import {
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";
// import "../App.css"
// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";

// function Header() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <li className="navbar-brand">Jimmy Smith</li>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav">
//       <a href="/"className="nav-link">Home </a>
//       <a href="/projects" className="nav-link">Projects</a>
//       <a href="/contact" className="nav-link">Contact Me</a>
//     </div>
//   </div>
// </nav>
//   )
// }

// export default Header;

const Styles = styled.div`
.navbar {
  background-color: #222;
}

.navbar-brand, .navbar-nav .nav-link {
  color: #bbb;

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