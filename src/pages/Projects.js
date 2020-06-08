import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Image2 from "../images/burger.jpg"
import Image3 from "../images/managementsystem.jpg"
import Image4 from "../images/hopsgrapes.jpg"
import Image6 from "../images/infodoselogin.jpg"
import Image8 from "../images/workdayscheduler.png"


function Projects() {
    return (
        <div>
            <Navbar />
            <br />
            <Container className="project-container">
            <Carousel>
                <Carousel.Item>
                <img className="burgerapp" src={Image2} alt={"Error"} height="250px" width="450px" />
                <br />
                    <Carousel.Caption />
                        
                       
                        <h3>Burger App</h3>
                        <p>This is a project that allows users to create and eat burgers.</p>
                        <a href="https://github.com/jasmith188/Burger"
                            className="github-app"> github.com/jasmith188/Burger
          </a>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img className="employee" src={Image3} alt={"Error"} height="250px" width="450px" />

                    <Carousel.Caption />
                        <h3>Employee Management App</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="https://github.com/jasmith188/Employee_Management_System"
                            className="github-app"> github.com/jasmith188/Employee_Management_System
          </a>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img className="hopsgrapes" src={Image4} alt={"Error"} height="250px" width="450px" />
                    <br />
                    <Carousel.Caption />
                        <h3>Hops&Grapes App</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <a href="https://github.com/jasmith188/Hops-Grapes"
                            className="github-app"> github.com/jasmith188/Hops-Grapes
          </a>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img className="infodose" src={Image6} alt={"Error"} height="250px" width="450px" />
                    <Carousel.Caption />
                        <h3>InfoDose App</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <a href="https://lit-crag-01772.herokuapp.com"
                            className="github-app">lit-crag-01772.herokuapp.com
          </a>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="notetaker" src={Image8} alt={"Error"} height="250px" width="450px" />

                    <Carousel.Caption/>
                        <h3>Day Planner App</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <a href="https://github.com/jasmith188/DayPlanner"
                            className="github-app"> github.com/jasmith188/DayPlanner
          </a>
                    
                </Carousel.Item>
            </Carousel>
            </Container>
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default Projects
