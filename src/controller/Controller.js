import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Project from "../components/project/Project";

function Controller() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Project" component={Project} />
        </Switch>
      </div>
    </Router>
  );
}

export default Controller;
