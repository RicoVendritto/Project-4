import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { resetUser } from "../services/api_helper";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      email: null,
      password: null
    };
  }

  componentDidMount = () => {
    this.setState({
      token: this.props.token
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleReset = e => {
    e.preventDefault();
    resetUser(this.state);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form className="register-form" onSubmit={e => this.handleReset(e)}>
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
            autoComplete="current-password"
            placeholder="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
            required
          />
          <button className="post_button">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ResetPassword);
