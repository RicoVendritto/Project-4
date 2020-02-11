import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
      password_confirm: null
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
        <form class="register-form">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onchange={e => this.handleChange(e)}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onchange={e => this.handleChange(e)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onchange={e => this.handleChange(e)}
            required
          />
          <input
            type="password"
            name="password_confirm"
            placeholder="repeat password"
            value={this.state.password_confirm}
            onchange={e => this.handleChange(e)}
            required
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
