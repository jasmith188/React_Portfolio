import React from "react";
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

import "../App.css"


function Footer() {
    return (
        <div className="footer">
        <Container className="social-home-bottom">

          <a
            href="https://github.com/jasmith188"
            className="github social">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/jamessmith812/"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a
            href="https://twitter.com/jimmysmith812"
            className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <a
            href="https://www.instagram.com/jimmysmith812/"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </Container>
      </div>
 );
}

export default Footer;