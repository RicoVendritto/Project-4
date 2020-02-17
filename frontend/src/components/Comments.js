import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import CreateComment from "./CreateComment";
import {
  commentsPost,
  commentCreate,
  verifyUser,
  commentDelete,
  commentSingle
} from "../services/api_helper";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
      apiDataLoaded: false,
      user_id: null,
      edit_div: null,
      edit_active: null
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

  editComment = async (e, commentId) => {
    e.preventDefault();
    const comment = await commentSingle(this.props.vid_id, commentId);
    console.log(comment);
    this.setState({
      edit_div: (
        <>
          <input type="text" value={comment.comment}></input>
          <h5>{comment.user_name}</h5>
          <h6>
            Posted {this.countDays(comment.created_at.split("T")[0])} days ago
          </h6>
        </>
      ),
      edit_active: commentId
    });
  };

  deleteComment = async (e, commentId) => {
    e.preventDefault();
    const oldComment = await commentDelete(this.props.vid_id, commentId);
    console.log(oldComment);
    const comments = this.state.comments.filter(
      comment => comment.id !== commentId
    );
    this.setState({
      comments
    });
  };

  countDays = commentDate => {
    let now = new Date();
    let post = new Date(commentDate);
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
              {parseInt(this.state.edit_active) !== parseInt(comment.id) ? (
                <>
                  <p>{comment.comment}</p>
                  <h5>{comment.user_name}</h5>
                  <h6>
                    Posted {this.countDays(comment.created_at.split("T")[0])}{" "}
                    days ago
                  </h6>
                </>
              ) : (
                this.state.edit_div
              )}
              {parseInt(this.state.user_id) === parseInt(comment.created_by) ? (
                <div className="comment_options">
                  {parseInt(this.state.edit_active) !== parseInt(comment.id) ? (
                    <button onClick={e => this.editComment(e, comment.id)}>
                      EDIT
                    </button>
                  ) : (
                    <button onClick={e => this.putComment(e, comment.id)}>
                      SAVE
                    </button>
                  )}
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
