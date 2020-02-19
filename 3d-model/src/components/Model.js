import "@google/model-viewer";
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
      input: null
    };
  }

  cameraUp = () => {
    // console.log("cam-up");
    const model = document.querySelector("#model");
    model.removeAttribute("camera-orbit");
    model.setAttribute("camera-orbit", "0deg 140deg 1m");
  };

  cameraDown = () => {
    // console.log("cam-down");
    const model = document.querySelector("#model");
    model.removeAttribute("camera-orbit");
    model.setAttribute("camera-orbit", "0deg 60deg 1m");
  };

  tryout = () => {
    // console.log("test");
    setInterval(this.cameraDown, 2000);
  };

  componentDidMount = () => {
    window.addEventListener("mousemove", this.trigger);
    const input = document.querySelector(".i_am_a_text_field");
    this.setState({
      input
    });
    // setInterval(this.cameraUp, 2000);
    // setTimeout(this.tryout, 1000);
  };

  trigger = e => {
    this.cursor(e);
    this.model(e);
  };

  cursor = e => {
    // mouseCursor.style.top = e.pageY + "px";
    // mouseCursor.style.left = e.pageX + "px";
    // console.log(`Mouse Y: ${e.pageY}`);
    // console.log(`Window Y: ${window.innerHeight}`);
    // console.log(`Mouse X: ${e.pageX}`);
    // console.log(`Window X: ${window.innerWidth}`);
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
    console.log(this.state.input);
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
    return (
      <div>
        <p>START</p>
        <model-viewer
          id="model"
          shadow-intensity="0"
          shadow-softness="0"
          camera-orbit={`${this.state.x}deg ${this.state.y}deg 1m`}
          skybox_image
          poster={Loading}
          src={Marsh}
          // camera-controls
          //   auto-rotate
        ></model-viewer>
        <form className="test_form">
          <input
            className="i_am_a_text_field"
            type="email"
            onChange={e => this.caret()}
          />
        </form>
        <p>END</p>
      </div>
    );
  }
}

export default Model;
