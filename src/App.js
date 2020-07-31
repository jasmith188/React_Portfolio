import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import NoMatch from "./pages/NoMatch";


class App extends React.Component {

  render() {
    return (

<Router>
      <div>
        <Switch>
          <Route exact path="/React_Portfolio" component={Home} />
          <Route exact path="/React_Portfolio/about" component={About} />
          <Route path="/React_Portfolio/projects" component={Projects} />
          <Route path="/React_Portfolio/contact" component={Contact} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div >
      </Router>


    );
  }



}
export default App;