import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from "../components/Navbar"
import Image from 'react-bootstrap/Image'
import Image5 from "../images/something.jpg"
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

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
                <Row>
                    <Col xs={12} >
                        <Image className="something" src={Image5} alt={"Error"} height="200px" width="370px" />
                    </Col>
                </Row>
            </Jumbotron>

            <div>
                <Container className="social-home">

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

        </div>
    );
}

export default Home;