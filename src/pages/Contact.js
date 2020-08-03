import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image4 from "../images/badge.png"
import Image from 'react-bootstrap/Image'

function Contact() {


  return (
    <div className="contact-page" id="contact">
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

      <a
        href="https://api.badgr.io/public/assertions/J4qMOUgvQyW5baLRTU7I2Q?identity__email=jasmith.188%40gmail.com"
        className="badgr">
        <Image src={Image4} rounded alt={"Error"} height="300px" width="300px" />
      </a>
      <br />
      <br />
      <br />
    </div>
  )


}



export default Contact;