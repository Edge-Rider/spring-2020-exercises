import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message/message.jsx";
import "./style.scss";
import "./index.html";

class Inbox extends React.Component {
  render() {
    return (
      <>
        <h1>Inbox</h1>
        <div className="inbox">
          <Message
            sender="Donald Trump"
            subject="Make America great again"
            time="9:30"
          />
          <Message sender="Vladimir Putin" subject="No!" time="9:45" />
        </div>
      </>
    );
  }
}

const appElm = document.querySelector("#app");
ReactDOM.render(<Inbox />, appElm);
