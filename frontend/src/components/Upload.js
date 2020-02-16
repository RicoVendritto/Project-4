import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Upload extends Component {
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

  componentDidMount = () => {
    //
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
          onSubmit={e => this.props.uploadVideo(e, this.state)}
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

export default withRouter(Upload);
