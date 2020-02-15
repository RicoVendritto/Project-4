import React from "react";
import "./WelcomePage.scss";
import ReactPlayer from "react-player";

const WelcomePage = () => {
  return (
    <div class="container">
      <div className="welcome-video">
        <ReactPlayer loop url={"https://youtu.be/RoSMzLZrlMI"} />
        </div>
      <div class="wrapper">
        <div class="neon-wrapper">
          <span class="txt txt1">INTERNATIONAL</span>
          <span class="gradient"></span>
          <span class="dodge"></span>
        </div>
        <div class="wrapper">
          <div class="neon-wrapper">
            <span class="txt txt2">EDM</span>
            <span class="gradient"></span>
            <span class="dodge"></span>
          </div>
        </div>
        <div class="wrapper">
          <div class="neon-wrapper">
            <span class="txt txt3">DATABASE</span>
            <span class="gradient"></span>
            <span class="dodge"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
