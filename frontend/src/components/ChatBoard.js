import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const chat = <FontAwesomeIcon icon={faComments} />;

const ChatBoard = () => {
  return (
    <div className="chatBoard">
      <iframe url="http://localhost:4000/"></iframe>
      <button className="toggleChat"></button>
      <i className="toggleChat">{chat}</i>
    </div>
  );
};

export default ChatBoard;
