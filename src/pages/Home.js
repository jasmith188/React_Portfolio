import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Navbar from "../components/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"

function Home() {
    return (
        <div className="home-body">
            <Navbar />
            <Jumbotron fluid>
                <Container>
                <h1>Hello, I'm Jimmy Smith.</h1>
                <p>
                    I'm a full-stack web developer.
                </p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid>
                <Container className="social-home">
                
            <a
                href="https://github.com/jasmith188"
                className="github social">
                <FontAwesomeIcon icon={faGithub} size="4x" />
            </a>
            <a
                href="https://www.linkedin.com/in/jamessmith812/"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="4x" />
            </a>
            <a
                href="https://twitter.com/jimmysmith812"
                className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="4x" />
            </a>
            <a
                href="https://www.instagram.com/jimmysmith812/"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="4x" />
            </a>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Home;