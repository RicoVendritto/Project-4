import React, { Component } from "react";
import "./App.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import { loginUser, registerUser, verifyUser } from "./services/api_helper";

import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import Background from "./components/Background";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: false,
      errorText: null
    };
  }

  componentDidMount = () => {
    verifyUser();
    if (localStorage.getItem("authToken")) {
      const name = localStorage.getItem("name");
      const email = localStorage.getItem("email");
      const user = { name, email };
      console.log(user);
      user &&
        this.setState({
          currentUser: user
        });
    }
  };

  handleLogin = async (e, loginData) => {
    console.log("handlelogin");
    console.log(loginData);
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    console.log(currentUser);
    this.setState({
      currentUser
    });
    this.props.history.push("/posts");
  };

  handleRegister = async (e, regoData) => {
    console.log("handleRego");
    console.log(regoData);
    e.preventDefault();
    const currentUser = await registerUser(regoData);
    console.log(currentUser);
    if (!currentUser.errorMessage) {
      this.setState({
        currentUser
      });
      this.props.history.push("/posts");
    } else {
      this.setState({ errorText: currentUser.errorMessage });
    }
  };

  handleLogout = e => {
    e.preventDefault();
    this.setState({
      currentUser: false
    });
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  };

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        {/* <Background /> */}
        <main>
          <Switch>
            <Route
              exact
              path="/login"
              render={() => (
                <Login
                  handleLogin={this.handleLogin}
                  handleReset={this.handleReset}
                />
              )}
            />
            <Route
              exact
              path="/register"
              render={() => (
                <Register
                  handleRegister={this.handleRegister}
                  errorText={this.state.errorText}
                />
              )}
            />
            <Route
              exact
              path="/forgotpassword"
              render={() => <ForgotPassword />}
            />
            <Route
              exact
              path="/passwordreset/:token"
              render={props => (
                <ResetPassword token={props.match.params.token} />
              )}
            />
            {/* <Main /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
