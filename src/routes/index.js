import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/homepage.container";

class AllRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact strict path="/" component={Home} />
      </Switch>
    );
  }
}

export default AllRoute;
