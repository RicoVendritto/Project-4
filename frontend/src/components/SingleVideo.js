import React, { Component } from "react";
import { postSingle, verifyUser } from "../services/api_helper";
import ReactPlayer from "react-player";
import { withRouter } from "react-router-dom";

import Comments from "./Comments";
import CreateComment from "./CreateComment";

class SingleVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null
    };
  }

  componentDidMount = async () => {
    verifyUser();
    const video = await postSingle(this.props.vid_id);
    this.setState({
      video
    });
  };

  render() {
    console.log(this.props);
    return (
      this.state.video && (
        <div className="single_video">
          <div className="ind_vid_container">
            <h4>{this.state.video.title}</h4>
            <ReactPlayer
              // playing
              url={this.state.video.video_url}
              config={{
                youtube: { playerVars: { controls: 0, modestbranding: 1 } }
              }}
            />
            <p>{this.state.video.description}</p>
          </div>
          <Comments />
        </div>
      )
    );
  }
}

export default withRouter(SingleVideo);
