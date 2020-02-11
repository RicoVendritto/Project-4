import React, { Component } from "react";
import "./App.scss";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Login />
            {/* <Main /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
