import React from "react";
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from "./Projects";
import Home from "./Home";
import About from "./About";
import Scroll from "./Scroll";
import Footer from "./Footer";
import Header from "./Header";

class Main extends React.Component {

    render() {
        return (

            <div>
                <>
                <Header/>
                </>
            
            
                <Home/>

                <Scroll></Scroll>
                <About></About>
                <Scroll></Scroll>
                <Projects></Projects>
                <Footer></Footer>

            
            </div>

        )
    }



}
export default Main;