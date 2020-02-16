import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Link, withRouter } from "react-router-dom";
import { verifyUser, postsAll } from "../services/api_helper";

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

  countDays = postDate => {
    let now = new Date();
    let post = new Date(postDate);
    let diff_time = now.getTime() - post.getTime();
    let diff_days = Math.ceil(diff_time / (1000 * 3600 * 24));
    return diff_days;
  };

  render() {
    console.log(this.state.posts);
    return (
      <section className="main_container">
        {this.state.posts &&
          this.state.posts.map((post, key) => (
            <div key={key} className="ind_vid_container">
              <Link to={`/video/${post.id}`}>
                <h4>{post.title}</h4>
              </Link>
              <ReactPlayer
                // playing
                url={post.video_url}
                config={{
                  youtube: { playerVars: { controls: 0, modestbranding: 1 } }
                }}
              />
              <p>Posted {this.countDays(post.created_at)} days ago</p>
              <p>{post.artist}</p>
              <p>{post.description}</p>
              {parseInt(this.state.user_id) === parseInt(post.created_by) ? (
                <div className="comment_options">
                  <button>EDIT</button>
                  <button onClick={e => this.deleteComment(e, post.id)}>
                    DELETE
                  </button>
                </div>
              ) : (
                <div className="comment_options">NO OPTIONS</div>
              )}
            </div>
          ))}
      </section>
    );
  }
}

export default withRouter(Main);
