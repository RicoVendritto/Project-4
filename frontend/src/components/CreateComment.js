import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
  };

  render() {
    return (
      <div>
        <form className="comment-form" onSubmit={e => alert("hello world")}>
          <input
            type="text"
            name="comment"
            autoComplete="none"
            placeholder="comment"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
            required
          />
          <button>Comment</button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateComment);
