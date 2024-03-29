import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { verifyUser } from "../services/api_helper";

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null,
      created_by: null,
      user_name: null
    };
  }

  componentDidMount = () => {
    verifyUser();
    this.setState({
      created_by: localStorage.getItem("id"),
      user_name: localStorage.getItem("name")
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  postComment = e => {
    this.props.handleComment(e, this.props.vid_id, this.state);
    document.querySelector(".comment_form").reset();
  };

  render() {
    console.log(this.props.vid_id);
    console.log(this.props);
    return (
      <div>
        <form className="comment_form" onSubmit={e => this.postComment(e)}>
          <input
            type="text"
            name="comment"
            autoComplete="none"
            placeholder="comment"
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
