import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
// import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
export default App;