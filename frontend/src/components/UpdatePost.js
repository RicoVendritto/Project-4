import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { postSingle, verifyUser } from "../services/api_helper";

class UpdatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      video_url: "",
      artist: "",
      description: "",
      category: ""
    };
  }

  componentDidMount = async () => {
    verifyUser();
    const post = await postSingle(this.props.postId);
    this.setState({
      title: post.title,
      video_url: post.video_url,
      artist: post.artist,
      description: post.description,
      category: post.category
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <form
          className="register-form"
          onSubmit={e =>
            this.props.updateVideo(e, this.props.postId, this.state)
          }
        >
          <input
            type="text"
            name="title"
            autoComplete="none"
            placeholder="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
            required
          />
          <input
            type="text"
            name="video_url"
            autoComplete="none"
            placeholder="video url"
            value={this.state.video_url}
            onChange={e => this.handleChange(e)}
            required
          />
          <input
            type="text"
            name="artist"
            autoComplete="none"
            placeholder="artist"
            value={this.state.artist}
            onChange={e => this.handleChange(e)}
            required
          />
          <input
            type="text"
            name="description"
            autoComplete="none"
            placeholder="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
            required
          />
          <input
            type="text"
            name="category"
            autoComplete="none"
            placeholder="category"
            value={this.state.category}
            onChange={e => this.handleChange(e)}
            required
          />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdatePost);
