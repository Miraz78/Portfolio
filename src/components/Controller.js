import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Project from "./project/Project";

function Controller() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/Home/About">
          <About />
        </Route>
        <Route path="/Home/Contact">
          <Contact />
        </Route>
        <Route path="/Home/Project">
          <Project />
        </Route>
      </Switch>
    </Router>
  );
}

export default Controller;
