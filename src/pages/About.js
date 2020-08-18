import React, { Component } from 'react';
import '../App.css';
// import Footer from "../components/Footer";
import Image3 from '../images/biopicture.jpeg';
import Image2 from '../images/plating.jpeg';
import Image from 'react-bootstrap/Image';
// import Image5 from "../images/something.jpg"
// import Jumbotron from 'react-bootstrap/Jumbotron'
import { Row, Col, Container } from 'react-bootstrap';
import { Card, ListGroup } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div className="about-section" id="about">
        <Container className="top-container">
          <Row>
            <Col xs={12}>
              <div className="about-text">
                Hello, my name is James Smith and I have recently recieved a
                Certificate in Full Stack Coding at the University of Central
                Florida. I have learned the fundamentals of different Languages
                and Applications used in front and back end development. I'm
                looking forward to contributing to my team's success by
                collaboratively creating different projects and applications.
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="profile-pic" xs={12}>
              <Image
                src={Image3}
                rounded
                alt={'Error'}
                height="350px"
                width="290px"
              />
            </Col>
          </Row>
        </Container>
        <br />

        <Row>
          <Col className="badge" xs={12}></Col>
        </Row>

        <Container className="skills-container">
          <h1 className="skills">Skills</h1>
          <Row>
          <Col xs={6} md={4} className="languages-column" >
          <Card style={{ width: '18rem' }} >
            <Card.Header>Languages</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>HTML</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
              <ListGroup.Item>Javascript</ListGroup.Item>
              <ListGroup.Item>Node.js</ListGroup.Item>
              <ListGroup.Item>SQL/NoSQL</ListGroup.Item>
            </ListGroup>
          </Card>
          </Col>
            <Col xs={6} md={4} className="mx-auto">
          <Card style={{ width: '18rem' }}>
            <Card.Header>Applications</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>React.js</ListGroup.Item>
              <ListGroup.Item>React Native</ListGroup.Item>
              <ListGroup.Item>MongoDB</ListGroup.Item>
              <ListGroup.Item>Express</ListGroup.Item>
              <ListGroup.Item>Handlebars</ListGroup.Item>
            </ListGroup>
          </Card>
          </Col>
          </Row>
        </Container>
<br />
        <Container className="bottom-container">
          <Row>
            <Col xs={12}>
              <div className="about-text">
                Working in the hectic restaurant business for the past 16 years
                has honed my skills in teamwork, time-management and dealing
                with ambiguity. These skills have allowed me to successfully
                transition my career from a chef to a Full Stack Developer.
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="chef-pic" xs={12}>
              <Image
                src={Image2}
                rounded
                alt={'Error'}
                height="500px"
                width="270px"
              />
            </Col>
          </Row>
        </Container>
        <br />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default About;
