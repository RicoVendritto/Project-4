import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirm: ""
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
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
