import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { verifyUser, getFav } from "../services/api_helper";

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: null
    };
  }

  componentDidMount = async () => {
    verifyUser();
    const favourites = await getFav();
    this.setState({
      favourites
    });
  };

  render() {
    return <div>TEST</div>;
  }
}

export default withRouter(Favourites);
