import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./Main.scss";
import { Link, withRouter } from "react-router-dom";
import { verifyUser, postsAll, postDelete } from "../services/api_helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const likeButton = <FontAwesomeIcon icon={faHeart} />;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      user_id: null
    };
  }

  componentDidMount = () => {
    verifyUser();
    this.loadPosts();
  };

  loadPosts = async () => {
    const posts = await postsAll();
    console.log(posts);
    this.setState({
      posts,
      user_id: localStorage.getItem("id")
    });
  };

  deleteVideo = async (e, id) => {
    e.preventDefault();
    const resp = await postDelete(id);
    const posts = this.state.posts.filter(post => post.id !== id);
    this.setState({
      posts
    });
  };

  countDays = postDate => {
    let now = new Date();
    let post = new Date(postDate);
    let diff_time = now.getTime() - post.getTime();
    let diff_days = Math.floor(diff_time / (1000 * 3600 * 24));
    return diff_days;
  };

  render() {
    console.log(this.state.posts);
    console.log(this.state);
    console.log(localStorage);
    return (
      <section className="main_container">
        {this.state.posts &&
          this.state.posts.map((post, key) => (
            <div key={key} className="ind_vid_container">
              <Link to={`/video/${post.id}`}>
                <h4 className="video_header">{post.title}</h4>
              </Link>
              <div className="video_container">
                <ReactPlayer
                  className="react_player"
                  url={post.video_url}
                  width="100%"
                  height="100%"
                  config={{
                    youtube: { playerVars: { controls: 0, modestbranding: 1 } }
                  }}
                />
              </div>
              <p className="post_age">
                Posted {this.countDays(post.created_at)} days ago
              </p>
              <p className="post_artist">Artist: {post.artist}</p>
              <p>{post.description}</p>
              {parseInt(this.state.user_id) === parseInt(post.created_by) ? (
                <div className="comment_options">
                  <div>
                    <Link to={`/edit/${post.id}`}>
                      <button className="post_button">EDIT</button>
                    </Link>
                    <button
                      className="post_button"
                      onClick={e => this.deleteVideo(e, post.id)}
                    >
                      DELETE
                    </button>
                  </div>
                  <div>
                    <i className="like_button boring">{likeButton}</i>
                  </div>
                </div>
              ) : (
                <div className="comment_options"> </div>
              )}
            </div>
          ))}
      </section>
    );
  }
}

export default withRouter(Main);
