import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function Contact() {

  
    return (
      <div className="contact-page" id="contact">
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
          <a href="https://www.linkedin.com/in/jamessmith812/"> linkedin.com/in/jamessmith812</a>
            <br />
            <p />Resume:
          <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:6ee41601-8e96-4dc0-8708-877c0c74d3fc"> James Smith's Resume (PDF)</a>
            <br />
          </Container>
        </Jumbotron>

      </div>
    )
  

}



export default Contact;