import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { position, offset } from "caret-pos";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
          onSubmit={e => this.props.handleLogin(e, this.state)}
        >
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
          <button>Submit</button>
        </form>
        <Link to="/forgotpassword">
          <button>Forgot Password</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(Login);
