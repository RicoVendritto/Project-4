import React, { Component } from "react";
import "./App.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import {
  loginUser,
  registerUser,
  verifyUser,
  postsCreate,
  postUpdate
} from "./services/api_helper";

import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";
import ChatBoard from "./components/ChatBoard";
import Main from "./components/Main";
import SingleVideo from "./components/SingleVideo";
import Upload from "./components/Upload";
import UpdatePost from "./components/UpdatePost";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import Background from "./components/Background";
import Favourites from "./components/Favourites";

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
    setTimeout(e => this.mainLoader(), 5000);
  };

  mainLoader = () => {
    // this.props.history.push("/main");
  };

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    console.log(currentUser);
    if (!currentUser.errorMessage) {
      this.setState({
        currentUser,
        errorText: null,
      });
      this.props.history.push("/main");
    } else {
      this.setState({ errorText: currentUser.errorMessage });
    }
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
    localStorage.removeItem("id");
    localStorage.removeItem("profile_pic");
    this.props.history.push("/");
  };

  uploadVideo = async (e, videoData) => {
    e.preventDefault();
    const resp = await postsCreate(videoData);
    console.log(resp);
    this.props.history.push("/main");
  };

  updateVideo = async (e, id, postData) => {
    e.preventDefault();
    const resp = await postUpdate(id, postData);
    this.props.history.push("/main");
  };

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <ChatBoard />
        <Background />
        <main>
          <Switch>
            <Route exact path="/" render={() => <WelcomePage />} />
            <Route
              exact
              path="/login"
              render={() => (
                <Login
                  handleLogin={this.handleLogin}
                  handleReset={this.handleReset}
                  errorText={this.state.errorText}
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
            <Route
              exact
              path="/upload"
              render={() => <Upload uploadVideo={this.uploadVideo} />}
            />
            <Route
              exact
              path="/edit/:id"
              render={props => (
                <UpdatePost
                  updateVideo={this.updateVideo}
                  postId={props.match.params.id}
                />
              )}
            />
            <Route exact path="/favourites" render={props => <Favourites />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
