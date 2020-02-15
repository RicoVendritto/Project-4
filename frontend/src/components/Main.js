import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Link, withRouter } from "react-router-dom";
import { verifyUser, postsAll } from "../services/api_helper";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null
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
      posts
    });
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
              <p>{post.description}</p>
            </div>
          ))}
      </section>
    );
  }
}

export default withRouter(Main);
