import React from 'react';
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer"
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Image2 from "../images/burger.jpg"
import Image3 from "../images/suntide.png"
import Image4 from "../images/vacationmakers.png"
import Image6 from "../images/infodoselogin.jpg"
import Image8 from "../images/workdayscheduler.png"


function Projects() {
    return (
        <div className="project-page">
            <Navbar />
            <br />
            <Container className="project-container">
                <Carousel>
                    <Carousel.Item>
                        <img className="burgerapp" src={Image2} alt={"Error"} height="250px" width="450px" />
                        <br />
                        <Carousel.Caption />
                        <h3>Burger App</h3>
                        <p>This is a project that allows users to create and eat burgers. Click on the link and play with it.</p>
                        <a href="https://github.com/jasmith188/Burger/"
                            className="blank_">Github Code</a> | <a href="https://mighty-plateau-81159.herokuapp.com/" className="blank_">App
                            </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="suntide" src={Image3} alt={"Error"} height="250px" width="450px" />

                        <Carousel.Caption />
                        <h3>Sun Tide</h3>
                        <p>In this application users can type a city and country andretrieve a current and 5 day forecast.</p>
                        <a href="https://github.com/jasmith188/Sun-Tide/"
                            className="blank_">Github Code</a> | <a href="https://jasmith188.github.io/Sun-Tide/" className="blank_">App
                            </a>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="hopsgrapes" src={Image4} alt={"Error"} height="250px" width="450px" />
                        <br />
                        <Carousel.Caption />
                        <h3>Vacation Makers</h3>
                        <p>This is an application that allows users to vacation to Florida with a budget. Choose your flight, hotel, restaurant or attraction and add it to your budget for your trip.</p>
                        <a href="https://github.com/jasmith188/VacationMakers"
                            target="blank_">Github Code</a> | <a href="https://the-vacation-makers.herokuapp.com/"
                                className="blank_">App</a>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="infodose" src={Image6} alt={"Error"} height="250px" width="450px" />
                        <Carousel.Caption />
                        <h3>InfoDose App</h3>
                        <p>This is a collaborative project which gives users information on overdoses by typing a location. Also the user can find a local police station nearby using geo-location.</p>
                        <a href="https://github.com/jasmith188/infODose-1"
                            target="blank_">Github Code</a> | <a href="https://lit-crag-01772.herokuapp.com"
                                className="blank_">App</a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="notetaker" src={Image8} alt={"Error"} height="250px" width="450px" />

                        <Carousel.Caption />
                        <h3>Day Planner App</h3>
                        <p>This is a project that allows users to write down their activities for the work day and it saves it for them.</p>
                        <a href="https://jasmith188.github.io/DayPlanner/" target="blank">Github Code</a> | <a href="jasmith188.github.io/DayPlanner" target="blank">App
                     </a>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <br />
            <br />
            <br />
            <br />
            {/* <Footer /> */}
        </div>
    )
}

export default Projects
