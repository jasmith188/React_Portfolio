import React, { Component } from 'react';
import { Link } from "react-scroll";

export default class Navbar extends Component {
    
    render() {
        return (
            <nav className="navbar" id="navbar">
                {/* <Link className="nav-link h1 name" to="/React_Portfolio">
                    <span id="nav">James Smith</span>
                </Link> */}
                {/* <!--Nav Items have been linked--> */}
              
                    
                        <Link
                            activeClass="active"
                            to="/React_Portfolio/about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            
                        >About</Link>
                    
                    
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="/React_Portfolio/projects"
                            activeClassName="selected"
                        >Projects</Link>
                  
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="/React_Portfolio/contact"
                            activeClassName="selected"
                        >Contact</Link>
                   
            
            </nav>
        )
    }
}



