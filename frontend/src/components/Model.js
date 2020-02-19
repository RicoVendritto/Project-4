import "@google/model-viewer";
import "./Model.scss";
import React, { Component } from "react";
import { offset } from "caret-pos";
import Marsh from "../resources/marsh_tryout.glb";
import Loading from "../resources/eclipse_loading.gif";

class Model extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Xbaseline: 30,
      Ybaseline: 120,
      x: 0,
      y: 90,
      input: null,
      off: null
    };
  }

  cameraUp = () => {
    const model = document.querySelector("#model");
    model.removeAttribute("camera-orbit");
    model.setAttribute("camera-orbit", "0deg 140deg 1m");
  };

  cameraDown = () => {
    const model = document.querySelector("#model");
    model.removeAttribute("camera-orbit");
    model.setAttribute("camera-orbit", "0deg 60deg 1m");
  };

  tryout = () => {
    setInterval(this.cameraDown, 2000);
  };

  componentDidMount = () => {
    window.addEventListener("mousemove", this.trigger);
    this.setState({
      x: this.props.x,
      y: this.props.y
    });
    // const input = document.querySelector(".i_am_a_text_field");
    // this.setState({
    //   input
    // });
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

  caret = () => {
    const off = offset(this.state.input);
    let x = Math.round((off.left / window.innerWidth) * 100);
    let y = Math.round((off.top / window.innerHeight) * 100);
    x = (x / 100) * 60;
    x = this.state.Xbaseline - x;
    y = (y / 100) * 60;
    y = this.state.Ybaseline - y;
    this.setState({
      x,
      y
    });
  };

  render() {
    console.log(this.state.x);
    console.log(this.state.y);
    return (
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
    );
  }
}

export default Model;
