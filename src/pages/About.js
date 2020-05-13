import React from "react";
import "../App.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../images/biopicture.jpeg"
import Image2 from "../images/plating.jpeg"
// import Background from "../components/Background"


function Home() {
  return (

    <div className="homePage">

      <Header />
      <div className="container">
        <div className="row">  </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="bioPicture">
              <img className="bioPicture" src={Image} alt={"Error"} height="550px" width="470px" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-body">
              <div className="card-text">
                Hello my name is Jimmy Smith. I have just recently switched careers out of the hectic restaurant business and have pursued a new career and have become a Full Stack Web Developer
                </div>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-6">
            <div className="card-body">
              <div className="card-text">
                I have recieved a certificate in Full Stack Coding at the University of Cetral Florida. There I learned the fundamentals of HTML-CSS-Javascript-jQuery-Responsive Design-Handlebars-Local Storage-IndexedDB-React.js-API-JSON-AJAX-MySQL-MongoDB-Node.js-Express-MERN Stack
                </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bioPicture">
              <img className="platingPicture" src={Image2} alt={"Error"} height="550px" width="350px" />
            </div>
          </div>
        </div>

      </div>



      <Footer />

    </div >
  );
}

export default Home;