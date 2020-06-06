import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Header from "../components/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"

function Home() {
    return (
        <div className="home-body">
            <Header />
            <Jumbotron fluid>
                <Container>
                <h1>Hello, I'm Jimmy Smith.</h1>
                <p>
                    I'm a full-stack web developer.
                </p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid>
                <Container>
                
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
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Home;