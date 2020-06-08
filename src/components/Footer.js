import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import "../App.css"


function Footer() {
    return (
    <div className="social-container">
            <h1 className="social-title">© Copyright 2020</h1>
            <a
                href="https://github.com/jasmith188"
                className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
                href="https://www.linkedin.com/in/james-smith-286a41112/"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
 );
}

export default Footer;