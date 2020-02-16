import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import CreateComment from "./CreateComment";
import {
  commentsPost,
  commentCreate,
  verifyUser
} from "../services/api_helper";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    verifyUser();
    const comments = await commentsPost(this.props.vid_id);
    this.setState({
      comments: comments,
      apiDataLoaded: true
    });
  };

  handleComment = async (e, vidId, commentData) => {
    e.preventDefault();
    const comment = await commentCreate(vidId, commentData);
    this.setState({
      comments: [...this.state.comments, comment]
    });
  };

  render() {
    console.log(this.props.vid_id);
    console.log(this.state.comments);
    console.log(localStorage);
    return (
      <>
        <h2>COMMENTS</h2>
        {this.state.apiDataLoaded &&
          this.state.comments.map((comment, id) => (
            <div key={id}>
              <p>{comment.comment}</p>
              <p>{comment.created_by}</p>
            </div>
          ))}
        <CreateComment
          vid_id={this.props.vid_id}
          handleComment={this.handleComment}
        />
      </>
    );
  }
}

export default withRouter(Comments);
