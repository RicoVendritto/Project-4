import "@google/model-viewer";
import "./Model.scss";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Marsh from "../resources/marsh_tryout.glb";
import Loading from "../resources/eclipse_loading.gif";
import { forgotUser } from "../services/api_helper";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      confirmation_text: ""
    };
  }

  componentDidMount = () => {
    // this.shakeHead();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleForget = async e => {
    e.preventDefault();
    const resp = await forgotUser(this.state);
    console.log(resp);
    if (resp.status === "ok") {
      this.setState({
        confirmation_text: "We've sent you an email with a reset link",
        email: ""
      });
    }
  };

  shakeHead = () => {
    setInterval(this.shakeLeft, 2000);
    setTimeout(this.delayShakeRight, 1000);
  };

  shakeLeft = () => {
    console.log("left");
    const model = document.querySelector("#model2");
    model.removeAttribute("camera-orbit");
    model.setAttribute("camera-orbit", "-30deg 60deg 1m");
  };

  delayShakeRight = () => {
    setInterval(this.shakeRight, 2000);
  };

  shakeRight = () => {
    console.log("right");
    const model = document.querySelector("#model2");
    model.removeAttribute("camera-orbit");
    model.setAttribute("camera-orbit", "30deg 120deg 1m");
  };

  render() {
    return (
      <div>
        <div className="model_wrapper">
          <model-viewer
            id="model2"
            shadow-intensity="0"
            shadow-softness="0"
            camera-orbit="0deg 90deg 1m"
            skybox_image
            poster={Loading}
            src={Marsh}
            // autoplay
            // camera-controls
          ></model-viewer>
        </div>
        <form className="register-form" onSubmit={e => this.handleForget(e)}>
          {this.state.confirmation_text && (
            <p>{this.state.confirmation_text}</p>
          )}
          <input
            type="email"
            name="email"
            autoComplete="username"
            placeholder="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
            required
          />
          <button>Reset</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ForgotPassword);
