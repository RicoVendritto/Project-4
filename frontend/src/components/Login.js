import "@google/model-viewer";
import "./Model.scss";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { offset } from "caret-pos";
import Marsh from "../resources/marsh_tryout.glb";
import Loading from "../resources/eclipse_loading.gif";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logindeets: {
        email: "",
        password: ""
      },
      Xbaseline: 30,
      Ybaseline: 120,
      x: 0,
      y: 90,
      input: null,
      off: null
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.caret(e);
    this.setState({
      logindeets: {
        ...this.state.logindeets,
        [name]: value
      }
    });
  };

  componentDidMount = () => {
    window.addEventListener("mousemove", this.trigger);
  };

  trigger = e => {
    this.model(e);
  };

  model = e => {
    let x = Math.round((e.pageX / window.innerWidth) * 100);
    x = (x / 100) * 60;
    x = this.state.Xbaseline - x;
    let y = Math.round((e.pageY / window.innerHeight) * 100);
    y = (y / 100) * 60;
    y = this.state.Ybaseline - y;
    this.setState({
      x,
      y
    });
  };

  caret = e => {
    const off = offset(e.target);
    let x = Math.round((off.left / window.innerWidth) * 100);
    let y = Math.round((off.top / window.innerHeight) * 100);
    x = (x / 100) * 60;
    x = this.state.Xbaseline - x;
    y = (y / 100) * 60;
    y = this.state.Ybaseline - y;
    this.setState({
      x: x,
      y: y
    });
  };

  render() {
    return (
      <div className="login-page ">
        <div className="model_wrapper">
          <model-viewer
            id="model"
            shadow-intensity="0"
            shadow-softness="0"
            camera-orbit={`${this.state.x}deg ${this.state.y}deg 1m`}
            skybox_image
            poster={Loading}
            src={Marsh}
          ></model-viewer>
        </div>
        <form
          className="register-form mobile-friendly-rego"
          onSubmit={e => this.props.handleLogin(e, this.state.logindeets)}
        >
          {this.props.errorText && <h4>{this.props.errorText}</h4>}
          <input
            class="email_field"
            type="text"
            name="email"
            autoComplete="email"
            placeholder="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
            required
          />
          <input
            class="password_field"
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
            required
          />
          <div className="form_options">
            <button className="post_button">Login</button>
            <button className="post_button">
              <Link to="/forgotpassword">Forgot Password</Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
