import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./Main.scss";
import { Link, withRouter } from "react-router-dom";
import {
  verifyUser,
  postsAll,
  postDelete,
  getFav,
  createFav,
  updateFav
} from "../services/api_helper";
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
    await postDelete(id);
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

  likeThis = (e, postId) => {
    const element = e.target;
    this.toggleColour(element);
    this.processLike(postId);
    e.preventDefault();
  };

  toggleColour = element => {
    element.classList.contains("boring")
      ? element.classList.remove("boring")
      : element.classList.add("boring");
    element.classList.contains("love-it")
      ? element.classList.remove("love-it")
      : element.classList.add("love-it");
  };

  processLike = async postId => {
    console.log(postId);
    const resp = await getFav(this.state.user_id);
    if (resp === "error") {
      const res = await createFav({
        created_by: this.state.user_id,
        favourites: postId
      });
      console.log(res);
    } else {
      let created_by = resp.created_by;
      let favourites = resp.favourites.split(",");
      favourites = favourites.filter(
        index => parseInt(index) !== parseInt(postId)
      );
      favourites.push(postId.toString());
      const res = await updateFav(this.state.user_id, {
        created_by: this.state.user_id,
        favourites: favourites.join(",")
      });
    }
  };

  render() {
    return (
      <section className="main_container">
        {this.state.posts &&
          this.state.posts.map((post, key) => (
            <div key={key} id="media_friendly_vid_container" className="ind_vid_container">
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
                    <i
                      className="like_button boring"
                      onClick={e => this.likeThis(e, post.id)}
                    >
                      {likeButton}
                    </i>
                  </div>
                </div>
              ) : (
                <div className="comment_options">
                  <div>
                    <i
                      className="like_button boring"
                      onClick={e => this.likeThis(e, post.id)}
                    >
                      {likeButton}
                    </i>
                  </div>{" "}
                </div>
              )}
            </div>
          ))}
      </section>
    );
  }
}

export default withRouter(Main);
