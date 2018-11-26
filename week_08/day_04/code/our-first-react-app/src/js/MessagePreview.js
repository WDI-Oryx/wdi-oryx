import React from "react";

class MessagePreview extends React.Component {
  constructor() {
    super();
    this.state = { message: "" };
    this.handleTyping = this.handleTyping.bind(this);
  }
  handleTyping(e) {
    this.setState({
      message: e.target.value
    }); // Change the data, re-render the page
  }
  render() {
    return (
      <div>
        <h1>My Message Preview App</h1>
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleTyping}
        />
        <p>You have typed: {this.state.message}</p>
      </div>
    );
  }
}

export default MessagePreview;
