import React, { Component } from 'react';
import { Link } from "react-scroll";

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    to="home"
                    activeClassName="selected">
                    James Smith
                </Link>
                {/* <!--Nav Items have been linked--> */}
                <ul className="nav">
                    <li className="nav-item nav-link">
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="about"
                            activeClassName="selected"
                        >About</Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="projects"
                            activeClassName="selected"
                        >Projects</Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="contact"
                            activeClassName="selected"
                        >Contact</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}



