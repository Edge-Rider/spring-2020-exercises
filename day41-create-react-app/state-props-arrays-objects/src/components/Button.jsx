import React from "react";

class Button extends React.PureComponent {
  render() {
    // desctructuring the this.props object for better readability in the code this is the same as text = this.props.text and onClick = this.props.onClick;
    const { text, onClick } = this.props;

    return <button onClick={() => onClick()}>{text}</button>;
  }
}

export default Button;
