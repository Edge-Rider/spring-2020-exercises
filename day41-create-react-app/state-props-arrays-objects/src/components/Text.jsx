import React from "react";

class Text extends React.PureComponent {
  render() {
    // desctructuring the this.props object for better readability in the code this is the same as text = this.props.text;
    const { text } = this.props;
    return <p>{text}</p>;
  }
}

export default Text;
