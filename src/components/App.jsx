import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./dashboard/Dashboard";
import Video from "./video/Video";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/video">
            <Video />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
