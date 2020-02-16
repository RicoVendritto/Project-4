import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import CreateComment from "./CreateComment";
import {
  commentsPost,
  commentCreate,
  verifyUser,
  commentDelete
} from "../services/api_helper";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
      apiDataLoaded: false,
      user_id: null
    };
  }

  componentDidMount = async () => {
    verifyUser();
    const comments = await commentsPost(this.props.vid_id);
    this.setState({
      comments,
      apiDataLoaded: true,
      user_id: localStorage.getItem("id")
    });
  };

  handleComment = async (e, vidId, commentData) => {
    e.preventDefault();
    const comment = await commentCreate(vidId, commentData);
    console.log(comment);
    this.setState({
      comments: [...this.state.comments, comment]
    });
  };

  deleteComment = async (e, vidId) => {
    e.preventDefault();
    const comment = await commentDelete(this.props.vid_id, vidId);
    console.log(comment);
  };

  countDays = postDate => {
    let now = new Date();
    let post = new Date(postDate);
    let diff_time = now.getTime() - post.getTime();
    let diff_days = Math.floor(diff_time / (1000 * 3600 * 24));
    return diff_days;
  };

  render() {
    console.log(this.props.vid_id);
    console.log(this.state);
    console.log(localStorage);
    return (
      <>
        <h2>COMMENTS</h2>
        {this.state.apiDataLoaded &&
          this.state.comments.map((comment, id) => (
            <div key={id} className="ind_comment">
              <p>{comment.comment}</p>
              <h5>{comment.user_name}</h5>
              <h6>
                Posted {this.countDays(comment.created_at.split("T")[0])} days
                ago
              </h6>
              {parseInt(this.state.user_id) === parseInt(comment.created_by) ? (
                <div className="comment_options">
                  <button>EDIT</button>
                  <button onClick={e => this.deleteComment(e, comment.id)}>
                    DELETE
                  </button>
                </div>
              ) : (
                <div className="comment_options">NO OPTIONS</div>
              )}
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
