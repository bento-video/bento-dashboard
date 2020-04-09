import React, { Component } from "react";
import Header from "./Header";
import Dashboard from "./dashboard/Dashboard";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
