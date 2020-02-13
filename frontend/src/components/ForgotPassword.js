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

  handleForget = async e => {
    e.preventDefault();
    const resp = await forgotUser(this.state);
    console.log(resp);
    if (resp.status === "ok") {
      console.log("OK");
      alert("hello world");
    }
  };

  render() {
    return (
      <div>
        <form className="register-form" onSubmit={e => this.handleForget(e)}>
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
