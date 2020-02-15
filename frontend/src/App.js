import React, { Component } from "react";
import "./App.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import { loginUser, registerUser, verifyUser } from "./services/api_helper";

import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";
import ChatBoard from "./components/ChatBoard";
import Main from "./components/Main";
import SingleVideo from "./components/SingleVideo";
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
      errorText: null,
      posts: null
    };
  }

  componentDidMount = () => {
    verifyUser();
    if (localStorage.getItem("authToken")) {
      const name = localStorage.getItem("name");
      const email = localStorage.getItem("email");
      const user = { name, email };
      user &&
        this.setState({
          currentUser: user
        });
    }
  };

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    console.log(currentUser);
    this.setState({
      currentUser
    });
    this.props.history.push("/main");
  };

  handleRegister = async (e, regoData) => {
    e.preventDefault();
    const currentUser = await registerUser(regoData);
    console.log(currentUser);
    if (!currentUser.errorMessage) {
      this.setState({
        currentUser
      });
      this.props.history.push("/main");
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
    this.props.history.push("/main");
  };

  render() {
    return (
      <div className="App">
        {/* <WelcomePage /> */}
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <ChatBoard />
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
            <Route exact path="/main" render={() => <Main />} />
            <Route
              exact
              path="/video/:id"
              render={props => <SingleVideo vid_id={props.match.params.id} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
