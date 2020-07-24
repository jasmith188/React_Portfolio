import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
    <Link className="nav-link h1 name" to="/React_Portfolio">
        <span id="nav">Home</span>
    </Link>
    {/* <!--Nav Items have been linked--> */}
    <ul className="nav">
        <li className="nav-item">
            <Link className="nav-link" to="/React_Portfolio/about"><span id="nav">About</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/React_Portfolio/projects"> <span  id="nav">Projects</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/React_Portfolio/contact"><span  id="nav">Contact</span></Link>
        </li>

    </ul>
</nav>
   
  )
} 

export default Navbar;