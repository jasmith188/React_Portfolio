import React from 'react';
// import {
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";
// import "../App.css"
// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <li className="navbar-brand">Jimmy Smith</li>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a href="/"className="nav-link">Home </a>
      <a href="/projects" className="nav-link">Projects</a>
      <a href="/contact" className="nav-link">Contact Me</a>
    </div>
  </div>
</nav>
  )
}

export default Header;