import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
const chat = <FontAwesomeIcon icon={faComments} />;

class ChatBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  chatToggle = () => {
    let chatApp = document.querySelector("iframe");
    let chatIcon = document.querySelector("i");
    chatApp.classList.contains("is-active")
      ? chatApp.classList.remove("is-active")
      : chatApp.classList.add("is-active");
    chatApp.classList.contains("not-active")
      ? chatApp.classList.remove("not-active")
      : chatApp.classList.add("not-active");
    chatIcon.classList.contains("grayed-out")
      ? chatIcon.classList.remove("grayed-out")
      : chatIcon.classList.add("grayed-out");
  };

  render() {
    return (
      <div className="chatBoard">
        <iframe
          className="chatApp not-active"
          src={`https://secure-everglades-46448.herokuapp.com`}
        ></iframe>
        <button className="toggleChat"></button>
        <i onClick={() => this.chatToggle()} className="toggleChat">
          {chat}
        </i>
      </div>
    );
  }
}

export default ChatBoard;
