import React, { Component } from "react";
import "./App.css";

import Model from "./components/Model";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Model />
      </div>
    );
  }
}

export default App;
