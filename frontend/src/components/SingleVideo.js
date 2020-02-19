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
    console.log(localStorage);
    return (
      this.state.video && (
        <div className="single_video">
          <div className="ind_vid_container">
            <h4 className="video_header">{this.state.video.title}</h4>
            <div className="video_container">
              <ReactPlayer
                className="react_player"
                url={this.state.video.video_url}
                width="100%"
                height="100%"
                config={{
                  youtube: { playerVars: { controls: 0, modestbranding: 1 } }
                }}
              />
            </div>
            <p>{this.state.video.description}</p>
            <div className="comment_section">
              {localStorage.getItem("id") && (
                <Comments vid_id={this.props.vid_id} />
              )}
            </div>
          </div>
        </div>
      )
    );
  }
}

export default withRouter(SingleVideo);
