import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function Contact() {

  
    return (
      <div className="contact-page">
        <Navbar />
        <br />

        <Jumbotron>
          <Container className="contact-container">
            <h1>Contact Me</h1>
            <p>Phone Number: (704) 909-8461</p>
            <p />Email Me:
          <a href="mailto:jasmith188@gmail.com"> jasmith.188@gmail.com</a>
            <br />
            <p />Github:
          <a href="https://github.com/jasmith188"> github.com/jasmith188</a>
            <br />
            <p />Linkedin:
          <a href="https://www.linkedin.com/in/james-smith-286a41112/"> linkedin.com/in/james-smith-286a41112</a>
            <br />
            <p />Resume (Google Docs):
          <a href="https://docs.google.com/document/d/1oWnfgtGphkfh5Kp-JtA4l4lrFDkzgU_4cAisA6_grbE/edit?usp=sharing"> Jimmy Smith's Resume (Google Docs)</a>
            <br />
          </Container>
        </Jumbotron>

      </div>
    )
  

}



export default Contact;