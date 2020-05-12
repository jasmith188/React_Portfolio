import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import NoMatch from "./pages/NoMatch"

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      </React.Fragment>
    );
  }



}
export default App;