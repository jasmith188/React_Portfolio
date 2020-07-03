import React from "react";
import "../App.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image3 from "../images/biopicture.jpeg"
import Image2 from "../images/plating.jpeg"
import Image from 'react-bootstrap/Image'
import Image4 from "../images/badge.png"
// import Image5 from "../images/something.jpg"
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Row, Col, Container } from "react-bootstrap"

function About() {
    return (
        <div className="homepage">
            <Navbar />
            <br />
            <Container className="top-container">
                <Row>
                    <Col xs={12} >
                        <div className="about-text">
                            Hello, my name is Jimmy Smith and I have recently recieved a Certificate in Full Stack Coding at the University of Central Florida. I have learned the fundamentals of different Languages and Applications used in front and back end development. I'm looking forward to contributing to my team's success by collaboratively creating different projects and applications.
                </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="profile-pic" xs={12} >
                        <Image src={Image3} rounded alt={"Error"} height="350px" width="290px" />
                    </Col>
                </Row>
            </Container>
            <br />
            
            <Row>
            <Col className="badge" xs={12}>
                        <a
                            href="https://api.badgr.io/public/assertions/J4qMOUgvQyW5baLRTU7I2Q?identity__email=jasmith.188%40gmail.com"
                            className="badgr">
                            <Image src={Image4} rounded alt={"Error"} height="300px" width="300px" />
                        </a>
                    </Col>
            </Row>
            <Jumbotron>
                <Container className="skills-container">
                    <h1 className="skills">Skills</h1>
                    <Row>
                        <Col xs={6} md={4} className="languages-column">
                            <h5>Languages</h5>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Javascript</li>
                                <li>Node.js</li>
                                <li>SQL</li>
                            </ul>
                        </Col>
                        <Col xs={6} md={4} className="mx-auto">
                            <h5>Applications</h5>
                            <ul>
                                <li>React.js</li>
                                <li>React Native</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>Express</li>
                                <li>Handlebars</li>
                                <li>Mongoose</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Container className="bottom-container">
                <Row>
                    <Col xs={12} >
                        <div className="about-text">
                            Working in the hectic restaurant business for the past 16 years has honed my skills in teamwork, time-management and dealing with ambiguity.  These skills have allowed me to successfully transition my career from a chef to a Full Stack Developer.
                </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="chef-pic" xs={12}>
                        <Image src={Image2} rounded alt={"Error"} height="500px" width="270px" />
                    </Col>
                </Row>
            </Container>
            <br />
            <Footer />
        </div>
    )
}

export default About 