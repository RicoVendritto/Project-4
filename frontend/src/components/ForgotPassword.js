import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { forgotUser } from "../services/api_helper";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
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
          onSubmit={e => (e.preventDefault(), forgotUser(this.state))}
        >
          <input
            type="email"
            name="email"
            autoComplete="username"
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
