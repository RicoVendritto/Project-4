import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import defaultProfilePic from "../resources/default_profile_pic.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      profile_pic: ""
    };
  }

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
          onSubmit={e => this.props.handleRegister(e, this.state)}
        >
          {this.props.errorText && <h4>{this.props.errorText}</h4>}
          <img
            alt="profile"
            className="profile_picture"
            src={
              this.state.profile_pic === ""
                ? defaultProfilePic
                : this.state.profile_pic
            }
          />
          <input
            type="text"
            name="profile_pic"
            autoComplete="none"
            placeholder="profile picture"
            value={this.state.profile_pic}
            onChange={e => this.handleChange(e)}
            required
          />
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
            required
          />
          <input
            type="text"
            name="email"
            autoComplete="email"
            placeholder="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
            required
          />
          <input
            type="password"
            name="password"
            autoComplete="new-password"
            placeholder="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
            required
          />
          <input
            type="password"
            name="password_confirm"
            autoComplete="new-password"
            placeholder="repeat password"
            value={this.state.password_confirm}
            onChange={e => this.handleChange(e)}
            required
          />
          <button className="post_button">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
