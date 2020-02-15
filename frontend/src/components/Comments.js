import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import CreateComment from "./CreateComment";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h2>COMMENTS</h2>
        <CreateComment />
      </>
    );
  }
}

export default withRouter(Comments);
