import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Image5 from "../images/something.jpg"
import { Row, Col, Container } from "react-bootstrap";


function Home() {
    return (
        <div className="home-body" id="home">
            
            <Jumbotron fluid>
                <Container>
                    <div className="typewriter">
                    <p>Hello, I'm James Smith</p>
                    <p className="typewriter">
                        I'm a full-stack web developer
                </p>
                </div>
                </Container>
                <Row>
                    <Col xs={12} >
                        <Image className="something" src={Image5} alt={"Error"} height="200px" width="370px" />
                    </Col>
                </Row>
            </Jumbotron>

            

        </div>
    );
}

export default Home;