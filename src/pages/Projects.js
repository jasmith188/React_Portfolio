import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../images/notetaker.jpg"
import Image2 from "../images/burger.jpg"
import Image3 from "../images/managementsystem.jpg"
import Image4 from "../images/hopsgrapes.jpg"
import Image5 from "../images/password.jpg"
import Image6 from "../images/infodosemain.jpg"
import Image7 from "../images/quiz.png"
import Image8 from "../images/workdayscheduler.png"

function Projects() {
  return (
    <div className="projectBackground">
      <Navbar/>
      <div className="row">
        <div className="col-lg-3">
          <div className="content">
          <h3 className="title">NoteTaker App</h3>
            <img className="notetaker" src={Image} alt={"Error"} height="150px" width="320px" />
            <a href="https://github.com/jasmith188/Note_Taker"
              className="github-app"> github.com/jasmith188/Note_Taker
          </a>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="content">
          <h3 className="title">Burger App</h3>
            <img className="burger" src={Image2} alt={"Error"} height="150px" width="320px" />
            <a href="https://github.com/jasmith188/Burger"
              className="github-app"> github.com/jasmith188/Burger
          </a>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="content">
            <h3 className="title">Employee Management App</h3>
            <img className="employee" src={Image3} alt={"Error"} height="150px" width="320px" />
            <a href="https://github.com/jasmith188/Employee_Management_System"
              className="github-app"> github.com/jasmith188/Employee_Management_System
          </a>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="content">
          <h3 className="title">Hops&Grapes App</h3>
            <img className="hopsgrapes" src={Image4} alt={"Error"} height="150px" width="320px" />
            <a href="https://github.com/jasmith188/Hops-Grapes"
              className="github-app"> github.com/jasmith188/Hops-Grapes
          </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="content">
          <h3 className="title">Password Generator App</h3>
            <img className="infodose" src={Image5} alt={"Error"} height="150px" width="320px" />
            <a href="https://github.com/jasmith188/Password_Generator"
              className="github-app"> github.com/jasmith188/Password_Generator
          </a>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="content">
          <h3 className="title">InfoDose App</h3>
            <img className="infodose" src={Image6} alt={"Error"} height="150px" width="320px" />
            <a href="https://lit-crag-01772.herokuapp.com"
              className="github-app">lit-crag-01772.herokuapp.com
          </a>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="content">
          <h3 className="title">Password App</h3>
            <img className="password" src={Image7} alt={"Error"} height="150px" width="320px" />
            <a href="https://github.com/jasmith188/CodeQuiz"
              className="github-app"> github.com/jasmith188/CodeQuiz
          </a>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="content">
          <h3 className="title">Day Planner App</h3>
            <img className="notetaker" src={Image8} alt={"Error"} height="150px" width="320px" />
            <a href="https://github.com/jasmith188/DayPlanner"
              className="github-app"> github.com/jasmith188/DayPlanner
          </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Projects;