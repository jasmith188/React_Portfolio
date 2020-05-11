import React from "react";
import Portfolio from "./Portfolio";
import Home from "./Home";
import About from "./About";
import Scroll from "./Scroll";
import Footer from "./Footer";

class Main extends React.Component {

    render() {
        return (
            
            <div>
            <Home></Home>
            <Scroll></Scroll>
            <About></About>
            <Scroll></Scroll>
            <Portfolio></Portfolio>
            <Footer></Footer>

            </div>
            
        )
    }



}
export default Main;