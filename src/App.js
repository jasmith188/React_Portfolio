import React from "react";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header"
import Footer from "./components/Footer"
// import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
export default App;