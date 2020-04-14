import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import CreateComment from "./CreateComment";
import {
  commentsPost,
  commentCreate,
  verifyUser,
  commentDelete,
  commentSingle,
  commentUpdate
} from "../services/api_helper";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
      apiDataLoaded: false,
      user_id: null,
      edit_div: null,
      comment_id: null,
      comment_edit: null,
      comment_text: ""
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
          <input
            className="edit_text_field"
            type="text"
            name="comment_text"
            placeholder="Please enter your comment here..."
            defaultValue={comment.comment}
            onChange={e => this.handleChange(e)}
          ></input>
          <h5>{comment.user_name}</h5>
          <h6>
            Posted {this.countDays(comment.created_at.split("T")[0])} days ago
          </h6>
        </>
      ),
      comment_id: commentId,
      comment_edit: comment
    });
  };

  putComment = async (e, commentId) => {
    let commentData = this.state.comment_edit;
    commentData.comment = this.state.comment_text;
    await commentUpdate(this.props.vid_id, commentId, commentData);
    const comments = this.state.comments.map(comment => {
      if (parseInt(comment.id) !== parseInt(commentId)) {
        return comment;
      } else {
        return commentData;
      }
    });
    this.setState({
      comment_id: null,
      comments
    });
  };

  deleteComment = async (e, commentId) => {
    e.preventDefault();
    await commentDelete(this.props.vid_id, commentId);
    const comments = this.state.comments.filter(
      comment => parseInt(comment.id) !== parseInt(commentId)
    );
    this.setState({
      comments
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
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
    return (
      <>
        <h2 className="comment_header">COMMENTS</h2>
        {this.state.apiDataLoaded &&
          this.state.comments.map((comment, id) => (
            <div key={id} className="ind_comment">
              {parseInt(this.state.comment_id) !== parseInt(comment.id) ? (
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
                  {parseInt(this.state.comment_id) !== parseInt(comment.id) ? (
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
                <div className="comment_options">
                  {/* <button>EDIT</button>
                  <button>DELETE</button> */}
                </div>
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
