import React from "react";
import "../App.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../images/biopicture.jpeg"


function Home() {
    return (
        <div className="homePage">
          <Header/>
          <div className="row">
            <div className="col-sm-6">
              <div className="bioPicture">
              <img className="Bio Picture" src={Image} alt={"Error"} height="550px" width="470px"/>
                <div className="col-sm-6">

                </div>
                
              </div>
            </div>
          </div>


        <Footer/>
        </div>
    );
  }

export default Home;