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
      <BrowserRouter>
      <Switch>
        <Route exact path="/React_Portfolio" component={Home} />
        <Route exact path="/React_Portfolio/about" component={About} />
        <Route path="/React_Portfolio/projects" component={Projects} />
        <Route path="/React_Portfolio/contact" component={Contact} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;